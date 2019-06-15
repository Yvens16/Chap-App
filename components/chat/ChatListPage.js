import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import FontAwesome, { Icons } from 'react-native-fontawesome';

export class ChatListPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}
              onPress={() => this.props.navigation.goBack()}
            >
            <Text style={{fontSize:wp('8%'), opacity:0.5, transform: [{ rotate: '180deg' }]}}> > </Text>
            <Text style={{fontSize: wp('10%'), fontWeight:'700'}}>Chats</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/search-icon/search2.png')}
              />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <FlatList
            data={[
              {key:'Clara Terence', img:require('../../assets/photos/abriella.png'), date:'2 days ago', msg:'Hello welcome to the next', count: 0, unread:false, type:'receiver'},
              {key:'Alice Barnett', img:require('../../assets/photos/arden.png'), date:'8:53', msg:'For the next twelve hours',count: 2, unread:true, type:'receiver'},
              {key:'Jon Snow', img:require('../../assets/photos/Fisher.png'), date:'9:20', msg:'Hello how are you? 😊',count: 1, unread:true, type:'receiver'},
              {key:'Felix Timmel', img:require('../../assets/photos/jean.png'),date:'Yesterday', msg:'When you want dude !',count: 0, unread:false, type:'receiver'},
              {key:'Yvens Belaston', img:require('../../assets/photos/miles.png'), date:'13:50', msg:'That\'s not exactly what she',count: 0, unread:false, type:'receiver'},
              {key:'Tiffany Derenne', img:require('../../assets/photos/miya.jpeg'), date:'3 days ago', msg:'I don\'t know, I thought', count: 3, unread:true, type:'receiver'},
              {key:'Guilhem Desliard', img:require('../../assets/photos/pierre.png'), date:'1 week ago', msg:'Yes ! Let\'s say on Tuesday ?', count: 1, unread:true, type:'receiver'},
            ]}
            renderItem={({item}) =>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ChatPage', {name:`${item.key}`, photo:item.img, msg:[{key: item.msg, type:'receiver'}]})}
                style={styles.list}>
                  <Image
                    style={styles.img}
                    resizeMode='cover'
                    source={item.img}
                  />
                {item.unread ? <View style={[item.unread ? styles.unread: null, styles.count]}><Text style={{color: '#fff', textAlign: 'center', textAlignVertical: 'center'}}>{item.count}</Text></View>: null}
                <View style={styles.middle}>
                    <Text style={{fontSize: wp('5%'), alignSelf: 'flex-start', marginLeft:wp('4%'), fontWeight: '700'}}>{item.key}</Text>
                    <Text style={[item.unread ? styles.unread: styles.read, {fontSize: wp('4%'), alignSelf: 'flex-start', marginLeft:wp('4%')}]}>{item.msg}</Text>
                </View>
                <View style={styles.right}>
                <Text style={[item.unread ? styles.unread: styles.read, {fontSize: wp('3.2%'), marginRight: wp('3%')}]}>{item.date}</Text>
                <Text style={{fontSize:wp('5%'), opacity:0.5}}>></Text>
                </View>
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: hp('20%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  body: {
    height: hp('75%'),
  },
  list: {
    width: wp('100%'),
    height: hp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    marginLeft: wp('5%'),
    alignSelf: 'center',
    borderRadius: wp('15%')/2,     
    width: wp('15%'),
    height: wp('15%'),
  },
  middle: {
    // marginLeft: wp('2%'),
    flex:45,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor: '#F1F1F1',
  },
  right: {
    flex:20,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor: '#F1F1F1',
  },
  unread: {
    color:'#add1d2',
    fontWeight: '500',
  },
  read: {
    color: '#536456'
  },
  count: {
    backgroundColor: '#add1d2',
    borderRadius: 300,
    borderColor: '#fff',
    borderWidth: 2,
    color: 'white',
    textAlign: 'center',
    width:wp('6.5%'),
    height:wp('6.5%'),
    position: 'absolute',
    transform: [
      {translateX:(wp('16%'))},
      {translateY:(hp('1%'))},
    ]
  }
})
export default ChatListPage;
