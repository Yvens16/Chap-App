import React, { Component } from 'react';
import colorGroup from '../../../assets/colorGroup.svg'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Platform, StatusBar} from 'react-native';
import { Svg } from 'expo';

const { Circle, G, Path, Mask, Rect, Defs, Stop, LinearGradient, ClipPath } = Svg;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);


const ThemeComponent = ({elems, handleTheme, theme}) => {
  const position1 = elems.interpolate({inputRange: [0, 1],outputRange: [wp('-10%'), 0]});
  return (
  <Animated.View style={[styles.themesColor, {opacity: elems} ]}>
   <AnimatedTouchable onPress={() => handleTheme(4)}><Animated.Text style={{color: theme === 3 ? '#d187b8' : '#d187b8', transform: [{translateY: position1}], fontSize: wp('3.5%'), }}>Girly Pink</Animated.Text></AnimatedTouchable>
   <AnimatedTouchable onPress={() => handleTheme(2)}><Animated.Text style={{color: theme ===3 ? '#5483b9' : '#29405a', transform: [{translateY: position1}], fontSize: wp('3.5%'), }}>Blue Navy</Animated.Text></AnimatedTouchable>
   <AnimatedTouchable onPress={() => handleTheme(3)}><Animated.Text style={{color:theme === 3 ? '#767676' : 'black', transform: [{translateY: position1}], fontSize: wp('3.5%'), }}>Dark Theme</Animated.Text></AnimatedTouchable>
   <AnimatedTouchable onPress={() => handleTheme(1)}><Animated.Text style={{color: theme === 3 ? '#42d899':'#338b40', transform: [{translateY: position1}], fontSize: wp('3.5%'), }}>Green Tons</Animated.Text></AnimatedTouchable>
  </Animated.View>
  );
};

const Heading = ({handlePress, handleTheme, open, green, yellow, orange, blue, elems, theme, name, photo, navigation, fontLoaded}) => {
  const elipse1 = 
  <Defs>
    <ClipPath id="cut-off-bottom">
      <Rect x="0" y="3.253" width="6.506" height="3.253" />
    </ClipPath>
  </Defs>;

  let elipse2;
  Platform.OS === 'android'
  ? elipse2 =
    <Defs>
      <ClipPath>
        <Rect x="0" y="0" width="6.506" height="6.506" />
      </ClipPath>
    </Defs>
  : elipse2 = null;

  let phonePath;
  switch (theme) {
    case 2:
      phonePath = require('../../../assets/Phones/BLUE_PHONE.png');
      break;
    case 3:
      phonePath = require('../../../assets/Phones/GREY_PHONE.png');
      break;
    case 4:
      phonePath = require('../../../assets/Phones/PINK_PHONE.png');
      break;
    default:
      phonePath = require('../../../assets/Phones/GREEN_PHONE.png');
  }

  let backArrowPath;
  switch (theme) {
    case 2:
      backArrowPath = require('../../../assets/back-arrow-buttons/BLUE_ARROW.png');
      break;
    case 3:
      backArrowPath = require('../../../assets/back-arrow-buttons/GREY_ARROW.png');
      break;
    case 4:
      backArrowPath = require('../../../assets/back-arrow-buttons/PINK_ARROW.png');
      break;
    default:
      backArrowPath = require('../../../assets/back-arrow-buttons/GREEN_ARROW.png');
  }

  let nameColor;
  switch (theme) {
    case 2:
      nameColor = '#357997';
      break;
    case 3:
      nameColor = 'grey';
      break;
    case 4:
      nameColor = '#d68087';
      break;
    default:
      nameColor = '#75b58e';
  }
  let cross;
  switch (theme) {
    case 2:
      cross = require('../../../assets/Cross/BLUE_CROSS.png');
      break;
    case 3:
      cross = require('../../../assets/Cross/GREY_CROSS.png');
      break;
    case 4:
      cross = require('../../../assets/Cross/PINK_CROSS.png');
      break;
    default:
      cross = require('../../../assets/Cross/GREEN_CROSS.png');
  }
  return (
  <View style={styles.container}>
    <View style={styles.container2}>
      <View style={styles.left}>
      <TouchableOpacity
          style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}
          onPress={() => navigation.goBack()}
        >
       <Image
        source={backArrowPath}
        style={{width:wp('2.5%'), height:hp('2.5%'), marginRight: wp('2%')}}
        />
        <Image
        source={photo}
        style={styles.profile}
        />
        </TouchableOpacity>
      <TouchableOpacity><Text style={{color: nameColor, fontWeight: '700', fontSize: wp('4.5%'), fontFamily: fontLoaded ? 'Montserrat-Bold': null}}>{name}</Text></TouchableOpacity>
    </View>
      <Image
        source={phonePath}
        style={{width:wp('7.5%'), height:hp('3.5%')}}
      />
        <TouchableOpacity style={styles.touch} onPress={handlePress}>
        {
        open
        ? 
        <View style={styles.cross}> 
          <Image
            source={cross}
            style={{width:wp('5.5%'), height:hp('2.5%')}}
          />
        </View>
        :  null
      }
          <AnimatedSvg style={[ styles.green, green.getLayout() ]} xmlns="http://www.w3.org/2000/svg" width={wp('10%')} height={hp('1%')} viewBox="0 0 40 6.507">
          {open ? elipse1 : elipse2}
            <Circle style={{ transform: [{ rotate: '90deg' }] }} clipPath="url(#cut-off-bottom)" id="green" data-name="Ellipse 3" cx="3.253" cy="3.253" r="3.253" fill="#30d588"/>
          </AnimatedSvg>
  
          <AnimatedSvg style={[ styles.yellow, yellow.getLayout() ]} xmlns="http://www.w3.org/2000/svg" width={wp('10%')} height={hp('1%')} viewBox="0 0 40 6.507">
          {open ? elipse1 : elipse2}
  
            <Circle clipPath="url(#cut-off-bottom)" id="yellow" data-name="Ellipse 4" cx="3.253" cy="3.253" r="3.253" fill='#d187b8'/>
          </AnimatedSvg>
  
          <AnimatedSvg style={[ styles.orange, orange.getLayout() ]} xmlns="http://www.w3.org/2000/svg" width={wp('10%')} height={hp('1%')} viewBox="0 0 40 6.507">
          {open ? elipse1 : elipse2}
            <Circle clipPath="url(#cut-off-bottom)" id="orange" data-name="Ellipse 6" cx="3.253" cy="3.253" r="3.253"  fill={theme ===3 ? '#5483b9' : '#29405a'}/>
          </AnimatedSvg>
  
        <AnimatedSvg style={[ styles.blue, blue.getLayout() ]} xmlns="http://www.w3.org/2000/svg" width={wp('10%')} height={hp('1%')} viewBox="0 0 40 6.507">
        {open ? elipse1 : elipse2}
          <Circle clipPath="url(#cut-off-bottom)" id="blue" data-name="Ellipse 2" cx="3.253" cy="3.253" r="3.253" fill={theme === 3 ? '#767676' : 'black'}/>
        </AnimatedSvg>
      </TouchableOpacity>  
    </View>
    {
      <ThemeComponent elems={elems} handleTheme={handleTheme} theme={theme}/>
    }
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp('3%'),
    height: hp('20%'),
    paddingTop: Platform.OS === 'android' ? 0: hp('2%'),
  },
  left:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: wp('50%'),
    // borderWidth:2,
  },
  themesColor:{
    height: hp('11%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth: 3,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: hp('11%'),
  },
  text: {
    textAlignVertical: 'center',
  },
  profile: {
    marginRight: wp('5%'),
    width:wp('10%'),
    height:hp('5%'),
    borderRadius: wp('5%'),
    alignSelf: 'center',
  },
  touch: {
    width: wp('10%'),
    height: hp('4.3%'),
  },
  cross: {
    alignItems: 'center',
    paddingTop: hp('0.5%'),
  },
  green: {
    // borderWidth: 2,
    transform: [
      {translateX:(wp('1.6%'))},
      {translateY:(hp('1.5%'))},
      { rotate: '45deg' }
    ],
  },
  yellow: {
    // borderWidth: 2,
    transform: [
      {translateX:wp('4.5%')},
      {translateY:hp('1.8%')},
      { rotate: '45deg' },
    ],
  },
  orange: {
    // borderWidth: 2,
    transform: [
      {translateX:wp('2.1%')},
      {translateY:hp('2%')},
      { rotate: '45deg' }
    ],
  },
  blue: {
    // borderWidth: 2,
    transform: [
      {translateX:wp('-0.7%')},
      {translateY:hp('0.2%')},
      { rotate: '45deg' }
    ],
  },
});
export default Heading;
        
