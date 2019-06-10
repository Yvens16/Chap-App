import React, { Component } from 'react';
import ChatPage from './components/chat/ChatPage';
import Splash from './components/login/SplashT';
import Login from './components/login/LoginPage';
import ChatList from './components/chat/ChatListPage';
import ChatBody from './components/chat/body/ChatBody';
import ChatHeader from './components/chat/header/ChatHeader';
import DevUX from './components/login/DevUX';
import { StyleSheet, Text, View, SplashScreen } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Font } from 'expo';
// import { Svg } from 'expo';


const AppNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
  }, 
  Login: {
    screen: Login,
  },
  ChatList: {
    screen: ChatList,
  },
  ChatPage: {
    screen: ChatPage, 
  },
  ChatBody: {
    screen: ChatBody, 
  },
  ChatHeader: {
    screen: ChatHeader, 
  },
  DevUX: {
    screen: DevUX,
    // navigationOptions: {
    //   header: null, for the selected screen
    // },
  }
},{
  defaultNavigationOptions: {
    header: null
  },
}, {
  initialRouteName: 'Splash'
})

export default createAppContainer(AppNavigator);
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentScreen: 'Splash',
//     }
//     setTimeout(() => {
//       this.setState({
//         currentScreen: 'Login',
//       })
//     }, 3000)
//   }

//   componentDidMount() {
//     // this.animation();
//     Font.loadAsync({
//       'Montserrat-black': require('./assets/Montserrat/Montserrat-Black.ttf'),
//     });
//   }
//   render() {
//     const { currentScreen } = this.state;
//     let screen = <DevUX/>
//     // let screen = currentScreen === 'Splash' ? <Splash/> : <ChatPage style={styles.body}/>;
//     return screen;
//     // return (
//     //   <View style={styles.container}>
//     //     <ChatPage style={styles.body}/>
//     //     <SplashScreen/>
//     //   </View>
//     // );
//   }
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  body: {
    color: 'green',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'green',
  },
});
