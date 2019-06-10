import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking, Platform, StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AwesomeButton from 'react-native-really-awesome-button';

export default class DevUX extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image
          source={require('../../assets/message2.png')}
          />
          <Text style={styles.text1}>Hello Fadel</Text>
          <Text style={styles.text2}>
            Cet app est un petit projet que nous avons crée afin de perfectionner nos skills,
            En react native et en design. Nous espérons que vous l'apprécierais.
          </Text>
        </View>
        <View style={styles.hr}/>
        <View style={styles.bottom}>
          <View style={styles.socialView}>
              <Image
                style={styles.img}
                source={require('../../assets/social/fadel.jpeg')}
              />
            <Text style={styles.text3}>Fadel Gueye</Text>
            <Text style={styles.text4}>UX/UI designer</Text>
            <View style={styles.social}>
              <TouchableOpacity onPress={() => Linking.openURL("https://www.behance.net/FadelGueye")}>
                <Image
                  source={require('../../assets/social/behance3.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/fadel-gueye-aa5021141/")}>
                <Image
                  style={styles.linkedin}
                  source={require('../../assets/social/linkedin3.png')}
                  />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.socialView}>
            <Image
              style={styles.img}  
              source={require('../../assets/social/yvens.jpeg')}
            />
              <Text style={styles.text3}>Yvens Belaston</Text>
              <Text style={styles.text4}>Developpeur web</Text>
              <View style={styles.social}>
              <TouchableOpacity onPress={() => Linking.openURL("https://github.com/Yvens16")}>
                  <Image
                    source={require('../../assets/social/githublogo3.png')}
                  />
              </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/yvens-belaston-0774a8141/")}>
                  <Image
                    style={styles.linkedin}
                    source={require('../../assets/social/linkedin3.png')}
                  />
                </TouchableOpacity>
              </View>
          </View>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('ChatList')}          
            style={styles.btn}>
            <Text style={styles.btnText}>Let's go</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    height: hp('100%'),
    backgroundColor: '#357997',
  },
  top: {
    height:hp('55%'),
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 3,
    // borderColor: 'green',
  },
  bottom: {
    height: hp('25%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '10%',
    // borderWidth: 3,
    // borderColor: 'red',
  },
  hr: {
    marginLeft:wp('30%'),
    marginRight:wp('30%'),
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  text1: {
    marginTop: '5%',
    fontSize: wp('10%'),
    color: '#fff',
  },
  text2: {
    color: '#fff',
    fontSize: wp('4%'),
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
    marginLeft: hp('4%'),
    marginRight: wp('4%'),
  },
  text3: {
    color: '#fff',
    fontWeight: '500',
    marginTop: '5%',
    fontSize: wp('7%'),
  },
  text4: {
    color: '#fff',
    fontStyle: 'italic',
  },
  img: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('15%')/2,
    borderWidth:3,
    borderColor: '#fff',
  },
  social: {
    marginTop: '5%',
    width: wp('80%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  socialView: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkedin:{
    marginLeft: '10 %',
  },
  container3: {
    height: hp('15%'),
    paddingTop: hp('1%'),
    alignItems: 'center',
    // borderWidth: 3,
    // borderColor: 'purple',
  },
  btnText: {
    color: '#357997',
    fontSize: wp('8%'),
    fontWeight: '600',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('6%'),
    width: '70%',
    borderRadius: 25,
    backgroundColor: '#f7fdac',
  }
})

