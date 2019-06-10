import React, { Component } from 'react';
import { View,Text,FlatList, Animated } from 'react-native';
import { handleThemeBody } from '../style';

const ChatBody = ({ convo, theme }) => {
  let ref;
  const setNode = (node) => {
    ref = node;
  }
  scrollToBottom = () => {
    ref.scrollToEnd();
  }
  let styles;
  styles = this.handleThemeBody(theme);
    return (
      <View style={styles.container}>
        <FlatList
          onLayout={() => this.scrollToBottom()}
          ref={ setNode }
          style={styles.list}
          inverted
          data={convo}
          renderItem={({item}) =>
          item.type === 'sender' ?
          <View style={[styles.senderMessage, styles.message]}><Text style={styles.text}> {item.key} </Text></View>
          : <View style={[styles.receiverMessage, styles.message]}><Text style={styles.text}> {item.key} </Text></View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
     </View>
    )
};

export default ChatBody;