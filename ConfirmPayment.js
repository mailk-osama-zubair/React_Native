import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
const Confirm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.Checklogo}>
        <Feather name='check' size={93} color={'white'} />
      </View>
      <View style={styles.ConfirmMessageView}>
        <Text style={styles.ConfrimMessage}>
          Your order is Confirmed!
        </Text>
      </View>
      <View style={styles.ConfirmMessageView}>
        <Text style={styles.ThankMessage}>
          Thnak you
        </Text>
      </View>
      <View style={styles.ButtonBox}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}
          style={styles.Button}>
          <Text style={styles.ButtonTitle}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.DiscriptionBox}>
<Text style={styles.discription}>
The Adam Smith Institute is delighted to announce the launch of the Enlightenment Essay competition.
 In recent years, the Arab World has witnessed remarkable economic growth and a shift towards liberalisation.
</Text>
      </View>
    </View>
  )
}

export default Confirm

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Checklogo: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#60C69C',
    alignSelf: 'center',
    marginTop: '19%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ConfirmMessageView: {
    height: 40,
    width: '88%',
    // borderWidth:1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ConfrimMessage: {
    fontSize: 22,
    color: 'black',
    fontWeight: '500',
  },
  ThankMessage: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
  },
  Button: {
    height: 36,
    width: '53%',
    alignSelf: 'center',
    backgroundColor: '#60C69C',
    marginTop: '10%',
    borderRadius: 50,
    justifyContent: 'center'
  },
  ButtonTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ButtonBox: {
    height: 130,
    // borderWidth:1,
    justifyContent: 'flex-end',
  },
  DiscriptionBox:{
    height:100,
    width:'88%',
    // borderWidth:1,
    alignSelf:'center',
    marginTop:'16%',
    justifyContent:'center',
  },
  discription:{
    color:'black',
    fontSize:11,
    textAlign:'center',

  }
})