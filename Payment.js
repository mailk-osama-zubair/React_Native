import { FlatList, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Payment = ({navigation}) => {
    const Data = [
        {
            // key:1,
            title: 'Master Card',
            image: require('../assets/masterCard.png'),
           
        },
        {
            // key:2,
            title: 'PayPal',
            image: require('../assets/paypal.png'),
        },
        {
            // key:3,
            title: 'Cash on Delivery',
            image: require('../assets/HomeDelivery.png'),
            
        },]
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
                <AntDesign onPress={()=>navigation.navigate('Cards')}
                 name={'arrowleft'} size={29} color={'white'} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Payment Methods
                </Text>
            </View>
            <View>
                <FlatList
                data={Data}
                renderItem={({item,index})=>{
                    return(
                        <View style={styles.MethodContainer}>
                            <View style={styles.PaymentTypebox}>
                                <Image  
                                 source={item.image}>

                                </Image>
                                <Text style={styles.paymentTitle}>
                                    {item.title}
                                </Text>
                                </View>
                                <View style={styles.add}>
                                    </View>
                            </View>
                    )
                }}
                />
            </View>
            <View style={styles.ButtonBox}>
            <TouchableOpacity onPress={()=>navigation.navigate('CardNumber')}
            style={styles.Button}>
<Text style={styles.ButtonTitle}>
Checkout
</Text>
</TouchableOpacity>
</View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
    conatiner:
{
    flex:1,

},
 header:
{
    height: 40,
    width: '88%',
    alignSelf: 'center',
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between'
},
titleContainer: {
    height: 40,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'8%'
    // backgroundColor:'red'

},
title: {
    color: 'black',
    fontSize: 26,
    fontWeight: '500',

},
MethodContainer:{
    height:100,
    width:'89%',
    // borderWidth:1,
    alignSelf:'center',
    marginTop:'3%',
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'row',
    backgroundColor:'white',
    elevation:3,
    borderRadius:13,
},
PaymentTypebox:{
    height:80,
    width:'59%',
    // borderWidth:1,
    justifyContent:'space-around',
    alignItems:'center',
    alignSelf:'center',
    flexDirection:'row',
},
paymentTitle:{
    color:'black',
    fontSize:16,
    fontWeight:'600',
    width:'66%',
    // borderWidth:1,
    marginRight:'3%',
},
add:{
    height:36,
    width:36,
    borderRadius:50,
    backgroundColor:'#D9D9D9',
},
Button:{
    height:36,
    width:'53%',
    alignSelf:'center',
    backgroundColor:'#60C69C',
    marginTop:'10%',
    borderRadius:50,
    justifyContent:'center'
},
ButtonTitle:{
    fontSize:14,
    fontWeight:'bold',
    textAlign:'center',
},
ButtonBox:{
    height:250,
    // borderWidth:1,
    justifyContent:'flex-end',
}
})