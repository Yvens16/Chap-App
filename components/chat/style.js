import { StyleSheet, Animated, Dimensions, PixelRatio, Platform  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number  
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
}

heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight /100);
}

///////////////// CHAT BODY //////////////////
const bodyGreen = StyleSheet.create({
  container: {
    height: hp('65%'),
  },
  senderMessage: {
    backgroundColor: '#5c5c5c',
    width: wp('70%'),
    marginTop: wp('2%'),
    borderRadius: wp('25%'),
    marginLeft: wp('3%'),
  },
  receiverMessage: {
    backgroundColor: '#75b58e',
    width: wp('70%'),
    marginTop: wp('2%'),
    borderRadius: wp('25%'),
    marginRight: wp('3%'),
    alignSelf: 'flex-end',
  },
  text: {
    flex:1,
    color: '#fff',
    fontSize: wp('3.3%'),
  },
  list : {
    flex:1,
  },
  message: {
    borderRadius: wp('25%'),
    padding: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
})

const bodyBlue = StyleSheet.create({
  container: {
    height: hp('65%'),
  },
  senderMessage: {
    backgroundColor: '#848484',
    width: wp('70%'),
    marginTop: wp('2%'),
    borderRadius: wp('25%'),
    marginLeft: wp('3%'),
  },
  receiverMessage: {
    backgroundColor: '#357997',
    width: wp('70%'),
    marginTop: wp('2%'),
    borderRadius: wp('25%'),
    marginRight: wp('3%'),
    alignSelf: 'flex-end',
  },
  text: {
    flex:1,
    color: '#fff',
    fontSize: wp('3.3%'),
  },
  list : {
    flex:1,
  },
  message: {
    borderRadius: wp('25%'),
    padding: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
})

const bodyDarkTheme = StyleSheet.create({
  container: {
    height: hp('65%'),
  },
  senderMessage: {
    backgroundColor: '#5c5c5c',
    width: wp('70%'),
    marginTop: wp('2%'),
    borderRadius: wp('25%'),
    marginLeft: wp('3%'),
  },
  receiverMessage: {
    backgroundColor: '#3b3b3b',
    width: wp('70%'),
    marginTop: wp('2%'),
    borderRadius: wp('25%'),
    marginRight: wp('3%'),
    alignSelf: 'flex-end',
  },
  text: {
    flex:1,
    color: '#fff',
    fontSize: wp('3.3%'),
  },
  list : {
    flex:1,
  },
  message: {
    borderRadius: wp('25%'),
    padding: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
})

const bodyPink = StyleSheet.create({
  container: {
    height: hp('65%'),
  },
  senderMessage: {
    backgroundColor: '#5c5c5c',
    width: wp('70%'),
    marginTop: wp('2%'),
    borderRadius: wp('25%'),
    marginLeft: wp('3%'),
  },
  receiverMessage: {
    backgroundColor: '#d68087',
    width: wp('70%'),
    marginTop: wp('2%'),
    borderRadius: wp('25%'),
    marginRight: wp('3%'),
    alignSelf: 'flex-end',
  },
  text: {
    flex:1,
    color: '#fff',
    fontSize: wp('3.3%'),
  },
  list : {
    flex:1,
  },
  message: {
    borderRadius: wp('25%'),
    padding: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
})

handleThemeBody = ThemeId => {
  console.log('ThemeId', ThemeId);
  switch(ThemeId) {
    case 1:
      return bodyGreen;
    case 2:
      return bodyBlue;
    case 3:
      return bodyDarkTheme;
    case 4:
      return bodyPink;  
  }
}
// export function handleThemeBody (ThemeId) {
//   console.log('ThemeId', ThemeId);
//   switch(ThemeId) {
//     case 1:
//       return bodyGreen;
//     case 2:
//       return bodyBlue;
//     case 3:
//       return bodyDarkTheme;
//     case 4:
//       return bodyPink;  
//   }
// }
///////////////// CHAT BODY //////////////////

///////////////// CHAT INPUT //////////////////
const inputDarkTheme = {
  input: {
    width: wp('50%'),
    textAlign: 'center',
    // placeholderTextColor: "#fff",
  },
  container: {
    // borderStyle: 'solid',
    // borderWidth: 3,
    // borderColor: 'blue',
    height: hp('10%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#222222',
  },
  hr: {
    borderLeftWidth: 1,
    borderLeftColor: 'grey',
    marginTop: '5%',
    marginRight: '5%',
    marginBottom: '5%',
    height: '70%',
  },
  fakeInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    width: wp('70%'),
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius:17,
    height: '100%',
    backgroundColor: '#2e2e2e',
  },
  trombonne: {
    width:'10%',
    height:'75%',
    // borderWidth: 3,
    // width: 30,
    // height: 30,
    marginRight: '5%',
    // marginRight: 10,
  },
  // border: {
  // borderStyle: 'solid',
  // borderColor: 'green',
  // borderWidth: 3,
  // },
}

const inputBasicTheme = {
  input: {
    textAlign: 'center',
    width: wp('50%')
  },
  // keyboard: {
  //   alignItems: 'center',
  //   justifyContent: 'flex-end',
  //   marginBottom: '10%',
  // },
  container: {
    height: hp('10%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  hr: {
    borderLeftWidth: 1,
    borderLeftColor: 'grey',
    marginTop: '5%',
    marginRight: '5%',
    marginBottom: '5%',
    height: '70%',
  },
  fakeInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    width: wp('70%'),
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius:17,
    height: hp('5%'),
    backgroundColor: '#fff',
  },
  trombonne: {
    // margin:10,
    // marginTop: 10,
    // marginBottom: 10,
    // padding: 10,
    width:'10%',
    height:'75%',
    // borderWidth: 3,
    // width: 30,
    // height: 30,
    marginRight: '5%',
    // marginRight: 10,
  },
  // border: {
  // borderStyle: 'solid',
  // borderColor: 'green',
  // borderWidth: 3,
  // },
}

handleThemeInput = (themeId) => {
    if (themeId === 3) {
      return inputDarkTheme;
    }
    return inputBasicTheme;
}
///////////////// CHAT INPUT ////////////////// 

///////////////// CHAT HEADER //////////////////
const headerDarkTheme = StyleSheet.create({
  container: {
    height: hp('20%'),
    backgroundColor: '#222222',
    // borderStyle: 'solid',
    // borderColor: 'red',
    // borderWidth: 4,
  },
  left:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
    // borderWidth:2,
  },
  themesColor:{
    flex:0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth: 3,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.9,
    // borderStyle: 'solid',
    // borderColor: 'purple',
    // borderWidth: 4,
  },
  text: {
    textAlignVertical: 'center',
  },
  profile: {
    width:50,
    height:50,
    borderRadius: 50/2,
    alignSelf: 'center',
  },
  touch: {
    width: 40,
    height: 40,
  },
  green: {
    alignSelf: 'center',
    transform: [
      {translateX:(2)},
      {translateY:(0)},
      { rotate: '45deg' }
    ],
  },
  yellow: {
    transform: [
      {translateX:(20)},
      {translateY:(15)},
      { rotate: '45deg' }
    ],
  },
  orange: {
    transform: [
      {translateX:(10)},
      {translateY:(18)},
      { rotate: '45deg' }
    ],
  },
  blue: {
    transform: [
      {translateX:(-3)},
      {translateY:(4)},
      { rotate: '45deg' }
    ],
  },
});

const headerGreen = StyleSheet.create({
  container: {
    height: hp('20%'),
    color: '#5c5c5c',
    borderStyle: 'solid',
  },
  left:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
    // borderWidth:2,
  },
  themesColor:{
    flex:0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth: 3,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.9,
    // borderStyle: 'solid',
    // borderColor: 'purple',
    // borderWidth: 4,
  },
  text: {
    textAlignVertical: 'center',
  },
  profile: {
    width:50,
    height:50,
    borderRadius: 50/2,
    alignSelf: 'center',
  },
  touch: {
    width: 40,
    height: 40,
  },
  green: {
    alignSelf: 'center',
    transform: [
      {translateX:(2)},
      {translateY:(0)},
      { rotate: '45deg' }
    ],
  },
  yellow: {
    transform: [
      {translateX:(20)},
      {translateY:(15)},
      { rotate: '45deg' }
    ],
  },
  orange: {
    transform: [
      {translateX:(10)},
      {translateY:(18)},
      { rotate: '45deg' }
    ],
  },
  blue: {
    transform: [
      {translateX:(-3)},
      {translateY:(4)},
      { rotate: '45deg' }
    ],
  },
});
// I have to create stylesheet for blue and pink link theme to their
// respective file and make the theme work correctly
handleThemeHeader = (themeId) => {
  switch(themeId) {
    case 1:
      return headerGreen;
    case 2:
      return headerBlue;
    case 3:
      return headerDarkTheme;
    case 4:
      return headerPink;
  }
  if (themeId === 3) {
    return headerDarkTheme;
  }
  return inputBasicTheme;
}
///////////////// CHAT HEADER ////////////////// 



export default  {
  //RESPONSIVE FUNCTIONS
widthPercentageToDP, heightPercentageToDP,
  //CHAT HEADER
  // handleThemeHeader, headerDarkTheme, headerGreen, headerBlue, headerPink,
  // CHAT BODY 
  bodyGreen, bodyBlue, bodyDarkTheme, bodyPink,handleThemeBody,
  // CHAT INPUT 
  inputDarkTheme, handleThemeInput, inputBasicTheme,
};