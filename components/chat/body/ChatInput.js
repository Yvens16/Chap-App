import React, { components } from 'react';
import { View, StyleSheet, TextInput, Text, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { inputDarkTheme, handleThemeInput, inputBasicTheme } from '../style';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const ChatBody = ({text, theme, handleInput, convo, handleTextSubmit}) => {
  let placeholderColor, styles;
  styles = this.handleThemeInput(theme);
  theme === 3 ?  placeholderColor = '#fff' : 'grey';
  return (
  <View style={styles.container}>
        <View style={styles.fakeInput}>
          <TextInput
          keyboardAppearance='dark'
          spellCheck
          multiline={true}
          scrollEnabled
          placeholder='Type your message...'
          placeholderTextColor={placeholderColor}
          onChange={(text) => handleInput(text)}
          value={text}
          style={[styles.input, {color: theme === 3 ? '#fff' : null}]}
          returnKeyType={'send'}
          onSubmitEditing={text => handleTextSubmit(text)}
          />
        <View style={styles.hr}/>
          <Image 
            source={require('../../../assets/extra/TROMBONE.png')}
            style={styles.trombonne}
          />
        </View>
  </View>
  );
};

export default ChatBody;