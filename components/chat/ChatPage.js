import React, { Component } from 'react';
import  { StyleSheet, Text, View, Animated, Platform, Easing, Dimensions, PixelRatio, StatusBar, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import Header from '../chat/header/ChatHeader';
import Body from '../chat/body/ChatBody';
import Input from '../chat/body/ChatInput';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import { widthPercentageToDp as wp, heightPercentageToDp as hp } from './style';

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      green: new Animated.ValueXY(),
      yellow: new Animated.ValueXY(),
      orange: new Animated.ValueXY(),
      blue: new Animated.ValueXY(),
      elems: new Animated.Value(0),
      headerBlackTheme: new Animated.Value(0),
      blackTheme: new Animated.Value(0),
      theme: 1,
      text: '',
      convo: [],
    };
  };

  handlePress = () => {
    Animated.parallel([
      Animated.timing(this.state.green, {
        toValue:{x: wp('-13%'), y: hp('9.7%') },
        duration:1000,
      }),
      Animated.timing(this.state.yellow, { // PINK
        toValue:{x: wp('-89%'), y: hp('8.6%') },
        duration:1000,
      }),
      Animated.timing(this.state.orange, { //BLUE
        toValue:{x: wp('-63.8%'), y: hp('7.3%') },
        duration:1000,
      }),
      Animated.timing(this.state.blue, {  //Dark
        toValue:{x: wp('-38%'), y: hp('8.2%') },
        duration:1000,
      }),
      Animated.timing(this.state.elems, {
        toValue:1,
        duration: 1000,
      })
    ]).start();
    this.setState(prevState => (
      { open: !prevState.open}
      ), () => {
        if (this.state.open === false) {
          Animated.timing(this.state.elems, {
            toValue:0,
            duration: 1000,
          }).start();
        }
      })
      if (this.state.open === true) {
        Animated.parallel([
          Animated.timing(this.state.green, {
            toValue:{x: 0, y:0 },
            duration:1000,
            // easing: Easing.linear,
          }),
          Animated.timing(this.state.yellow, {
            toValue:{x: 0, y:0 },
            duration:1000,
          }),
          Animated.timing(this.state.orange, {
            toValue:{x: 0, y:0 },
            duration:1000,
          }),
          Animated.timing(this.state.blue, {
            toValue:{x: 0, y:0 },
            duration:1000,
          }),
        ]).start();
      }
  };

  handleTheme = (theme) => {
    this.setState({
      theme, 
    },() => {
      if (theme === 3) {
        Animated.timing(this.state.blackTheme, {
          toValue:1,
          duration: 200,
        }).start();
      } else if (theme != 3) {
        Animated.timing(this.state.blackTheme, {
          toValue:0,
          duration: 200,
        }).start();
      }
    })
  };

  handleInput = (content) => {
    this.setState({
      text: content.nativeEvent.text,
    })
  }

  handleTextSubmit = (content) => {
    this.state.convo.unshift({key: content.nativeEvent.text, type: 'sender'});
    this.props.navigation.state.params.msg = this.state.convo;
    setTimeout(() => {
      this.setState({
        text: '',
      })
    },100)
  }

  componentDidMount() {
    this.setState({
      convo: this.props.navigation.state.params.msg,
    })
  }
  render () {
    const { open, green, yellow, orange, blue, elems, theme, blackTheme, text, convo, handleTextSubmit } = this.state;
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.blackView, {flex:blackTheme}]}></Animated.View>
        <View style={styles.innerContainer}>
          <Header
            style={styles.header}
            handlePress={this.handlePress}
            handleTheme={this.handleTheme}
            open={open}
            green={green}
            yellow={yellow}
            orange={orange}
            blue={blue}
            theme={theme}
            elems={elems}
            name={this.props.navigation.state.params.name}
            photo={this.props.navigation.state.params.photo}
            navigation={this.props.navigation}
          />
          <KeyboardAvoidingView style={{flex:1, justifyContent: 'flex-end'}} keyboardVerticalOffset={hp('2%')} behavior='position'>
            <Body
            theme={theme}
            convo={convo}
            />
            <Input
            theme={theme}
            text={text}
            handleInput={this.handleInput}
            handleTextSubmit={this.handleTextSubmit}
            convo={convo}
            />
          </KeyboardAvoidingView>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
  },
  blackView: {
    backgroundColor:"#222222",
    width:wp('100%'),
    zIndex:-1,
  },
  innerContainer:{
    width:wp('100%'),
    flex:1,
    position:'absolute',
    zIndex:2
  },
});