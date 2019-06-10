import React, { Component } from 'react';
import { StyleSheet, View, Animated, Text, TouchableOpacity, Easing } from 'react-native';
import { Svg, SplashScreen } from 'expo';
import pose from 'react-native-pose';

const { Circle, Rect, G, Path } = Svg;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedG = Animated.createAnimatedComponent(G);

export default class Splash extends React.Component {
  constructor () {
    super();
    this.state = {
      op1: new Animated.Value(0),
      op2: new Animated.Value(0),
      op3: new Animated.Value(0),
      op4: new Animated.Value(0),
      chitAnim : new Animated.Value(-250),
      chatAnim : new Animated.Value(1500),
      isAnimDone: false,
    }
  }

  _anime = () => {
    Animated.sequence([
      Animated.timing(this.state.op1, {
        toValue:1,
        duration:300
      }),
      Animated.timing(this.state.op2, {
        toValue:1,
        duration:300
      }),
      Animated.timing(this.state.op3, {
        toValue:1,
        duration:300
      }),
      Animated.timing(this.state.op4, {
        toValue:1,
        duration:300
      }),
      Animated.timing(this.state.chitAnim, {
        toValue:324,
        duration:300,
        easing: Easing.bounce
      }),
      Animated.timing(this.state.chatAnim, {
        toValue:737.658,
        duration:300,
        easing: Easing.bounce
      }),
    ]).start(() => {
      setTimeout(() => {
        this.props.navigation.navigate('Login');
      }, 300);
    });
  };
  componentDidMount() {
    SplashScreen.preventAutoHide();
    this._anime();
    SplashScreen.hide()
  }
  render () {
    const animatedStyle = {
      transform: [
        {
          translateX: this.state.chitAnim
        },
        {
          translateY: 398
        },
      ]
    }
    const animatedStyle2 = {
      transform: [
        {
          translateX: this.state.chatAnim
        },
        {
          translateY: 398
        },
      ]
    }
    const position1 = this.state.op1.interpolate({inputRange: [0, 1],outputRange: [800, 0]});
    const position2 = this.state.op2.interpolate({inputRange: [0, 1],outputRange: [-800, 0]});
    const position3 = this.state.op3.interpolate({inputRange: [0, 1],outputRange: [800, 0]});
    const position4 = this.state.op4.interpolate({inputRange: [0, 1],outputRange: [-800, 0]});
    return (
      <View style={styles.container}>
        <Svg width='100%' height='100%' viewBox='0 0 1200 800'>
  <G id='Chitchatlogo' transform='translate(-150 -110)'>
    <Rect id='frame' width='100%' height='100%' transform='translate(109 110)' fill='none' />
    <AnimatedCircle style={{opacity: this.state.op3, transform: [{translateY: position3}] }} id='rond3' cx='28.146' cy='28.146' r='28.146' transform='translate(709.929 568.857)' fill='#add1d2' />
    <AnimatedCircle style={{opacity: this.state.op4, transform: [{translateY: position4}]}} id='rond4' cx='28.146' cy='28.146' r='28.146' transform='translate(808.091 568.857)' fill='#357997' />
    <AnimatedCircle style={{opacity: this.state.op2, transform: [{translateY: position2}]}} id='rond2' cx='28.146' cy='28.146' r='28.146' transform='translate(618.429 568.857)' fill='#357997' />
    <AnimatedCircle
      style={{opacity: this.state.op1, transform: [{translateY: position1}]}}
      id='rond1'
      cx='28.146'
      cy='28.146'
      r='28.146'
      transform='translate(526.93 568.857)'
      fill='#add1d2'
    />
    <AnimatedG style={animatedStyle} transform="translate(-250 398)" id='chit' opacity='0.997'>
      <Path
        id='Tracé_9'
        data-name='Tracé 9'
        d='M309.588,269.307c0-42.5,31.119-74.692,77.36-74.692,22.053,0,40.014,7.827,48.909,22.053l-20.808,17.072c-6.4-9.422-16.36-14.581-30.058-14.581-28.1,0-46.235,21.513-46.235,48.369,0,18.851,12.447,31.3,34.855,31.3a43.346,43.346,0,0,0,33.076-14.4L423.76,301.85c-13.158,15.293-31.3,21.519-52.639,21.519C333.064,323.369,309.588,301.316,309.588,269.307Z'
        transform='translate(-309.588 -181.28)'
        fill='#add1d2'
      />
      <Path
        id='Tracé_10'
        data-name='Tracé 10'
        d='M440.867,261.262a52.613,52.613,0,0,1-1.251,11.385l-10.668,52.994H401.2l10.318-51.221a29.61,29.61,0,0,0,.712-6.576c0-9.778-5.337-15.293-16.36-15.293-14.053,0-23.832,7.822-27.212,24.543l-9.6,48.547H331.315l26.322-131.955h27.74l-8.889,44.995c8.355-6.938,18.673-10.14,29.518-10.14C426.814,228.541,440.867,239.926,440.867,261.262Z'
        transform='translate(-206.636 -185.687)'
        fill='#add1d2'
      />
      <Path
        id='Tracé_11'
        data-name='Tracé 11'
        d='M371.761,236.57h27.567L380.3,332.247H352.732Zm2.313-27.74c0-9.25,7.288-16.538,18.317-16.538,9.778,0,16.36,6.042,16.36,13.875,0,10.128-7.466,17.066-18.495,17.066C380.477,223.234,374.073,216.835,374.073,208.83Z'
        transform='translate(-105.153 -192.292)'
        fill='#add1d2'
      />
      <Path
        id='Tracé_12'
        data-name='Tracé 12'
        d='M393.4,277.675a15.507,15.507,0,0,0-1.768,3.512c-2.146,5.463-.4,9.778,6.048,12.32a22.208,22.208,0,0,0,11.666.958l-3.426,19.861c-8.016,1.435-16.475-.367-24.256-3.426-16.55-6.513-24.153-20.211-18.036-35.762a46.629,46.629,0,0,1,3.891-7.46l21.244-33.105-13.732-5.406,11.787-18.294,13.738,5.406,12.831-19.987L439.2,206.456l-12.837,19.981,22.173,8.728-11.781,18.294-22.179-8.728Z'
        transform='translate(-63.489 -173.334)'
        fill='#add1d2'
      />
    </AnimatedG>
    <AnimatedG style={animatedStyle2} transform="translate(1500 398)" id='chat'>
      <Path
        id='Tracé_13'
        data-name='Tracé 13'
        d='M383.242,269.266c0-42.5,31.119-74.7,77.36-74.7,22.047,0,40.009,7.833,48.9,22.053L488.7,233.7c-6.4-9.428-16.36-14.581-30.052-14.581-28.1,0-46.24,21.513-46.24,48.364,0,18.857,12.452,31.3,34.855,31.3a43.369,43.369,0,0,0,33.082-14.4l17.072,17.428c-13.164,15.293-31.3,21.519-52.644,21.519C406.712,323.328,383.242,301.275,383.242,269.266Z'
        transform='translate(-383.242 -189.238)'
        fill='#357997'
      />
      <Path
        id='Tracé_14'
        data-name='Tracé 14'
        d='M514.516,261.216A52.9,52.9,0,0,1,513.27,272.6l-10.674,53h-27.74l10.312-51.221a29.65,29.65,0,0,0,.711-6.576c0-9.784-5.331-15.293-16.36-15.293-14.048,0-23.832,7.822-27.211,24.543l-9.6,48.547h-27.74L431.285,193.64h27.746l-8.895,45c8.361-6.938,18.673-10.14,29.524-10.14C500.468,228.5,514.516,239.875,514.516,261.216Z'
        transform='translate(-280.29 -193.64)'
        fill='#357997'
      />
      <Path
        id='Tracé_15'
        data-name='Tracé 15'
        d='M541.085,201.137l-19.029,95.677H495.734l1.779-9.428c-7.649,6.938-17.605,10.851-29.346,10.851-22.231,0-41.253-15.654-41.253-42.86,0-32.187,23.292-55.663,52.816-55.663,13.87,0,24.893,4.447,31.12,14.409l2.49-12.986Zm-36.278,42.677c0-12.975-8-21.158-21.881-21.158-16.354,0-28.1,12.8-28.1,31.475,0,12.98,8.005,21.163,21.875,21.163C493.066,275.295,504.806,262.487,504.806,243.814Z'
        transform='translate(-176.31 -164.859)'
        fill='#357997'
      />
      <Path
        id='Tracé_16'
        data-name='Tracé 16'
        d='M495.943,279.8a15.115,15.115,0,0,0,.941,3.816c1.928,5.543,6.054,7.69,12.613,5.411a22.171,22.171,0,0,0,9.474-6.863l10.335,17.3c-5.147,6.312-12.751,10.455-20.641,13.193-16.808,5.836-31.5.39-36.979-15.4a46.4,46.4,0,0,1-1.9-8.189l-5.429-38.964-13.944,4.838-2.967-21.553,13.944-4.843-3.271-23.522,26.213-9.1,3.271,23.528,22.512-7.816,2.967,21.559-22.517,7.816Z'
        transform='translate(-79.006 -182.817)'
        fill='#357997'
      />
    </AnimatedG>
  </G>
</Svg>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: 'red',
  },
  marge: {
    marginRight: 40,
  },
});

// chit transform='translate(324 398)'