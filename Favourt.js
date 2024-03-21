// import { View, Text, FlatList, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
// import React, { useEffect, useRef, useState } from 'react'
// // import { } from 'react-native-gesture-handler'
// import { event, log } from 'react-native-reanimated'
// const Details = () => {
//   const screenWidth=Dimensions.get("window").width;
//   // console.log(screenWidth)
//   const flatListRef=useRef();
//   useEffect(()=>{
//     let interval= setInterval(()=>{
//     },3000);
//     return()=>clearInterval(interval);
//   })
//   const getItemLayo=(data,index)=>({
// length:screenWidth,
// offset:screenWidth*index,
// index:index,


//   } 
//   // ,console.log( getItemLay)
//   )
// const Slider = [
//   {
//     id: '01',
//     image: require('../assets/I1.png'),
//   },
//   {
//     id: '02',
//     image: require('../assets/I2.png'),
//   },
//   {
//     id: '03',
//     image: require('../assets/I3.png'),
//   }
// ]
// const action = ({ item, index }) => {
//   return (
//     <View >
//       <View
//         style={styles.container}
//       >
//         <Image style={styles.images} source={item.image} />
//       </View>
//     </View>
//   )
// }
// const slideDot = () => {
//   return (
//     Slider.map((dot, index) => {

//       if ( activeIndex===index ) {
//       return (
//           <View 
//       key={index}

//           style={{
//             height: 10,
//             width: 10,
//             borderRadius: 50,
//             backgroundColor: 'red',
//             // marginHorizontal: '2%'
//           }}>

//           </View>
//         )
//       }
// else 
//   {
//     return ( 
//     <View
//     key={index}

//       style={{
//         height: 10,
//         width: 10,
//         borderRadius: 50,
//         backgroundColor: 'grey',
//         // borderWidth: .5,
//         marginHorizontal: '2%'
//       }}
//     >
//     </View>
//   )
// }
 
   
//     }
//     ))
// }
// const handleScroll = (event) => {
//   const ScrollPosition = event.nativeEvent.contentOffset.x;
//   console.log(ScrollPosition);
//   const index = ScrollPosition / screenWidth;
//   console.log(index);
//   setactiveIndex(index)
// };
// const [activeIndex, setactiveIndex] = useState(0);


//   return (
//     <View >
//       <FlatList
//         data={Slider}
//         horizontal
//         getItemLayout={getItemLayo}
//         keyExtractor={(item) => item.id}
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled={true}
//         ref={flatListRef}
//         onScroll={handleScroll}
//         renderItem={action} />
//       <View style={styles.dotstyle}>
//         {
//           slideDot()
//         }
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: 300,
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent:'center',
//     // marginLeft:17,
//   },
//   images: {
//     width: 400.3,
//     borderRadius: 10,
//     height: 300,
//     // marginRight:30,
//     // justifyContent:'space-between'

//   },
//   id: {
//     fontSize: 40,
//     padding: 40,
//     borderWidth: 2,
//   },
//   dotstyle: {
//     justifyContent: 'center',
//     flexDirection: 'row',
//     marginTop: '-5%',

//   }
// })
// export default Details
import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    ScrollView
} from 'react-native';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import SliderDots from '../Compoents/SliderDots'
const slides = [
    {
        // key:1,
        title: 'Balmin Bicker Jacket',
        image: require('../assets/I1.png'),
        price: '$47.00',
        canclePrice: '$79.00',
        reate: '183',
        stars: require('../assets/stars.png'),
        Discription: (' The Adam Smith Institute is delighted to announce the launch of the Enlightenment Essay competition.In recent years, the Arab World has witnessedremarkable economic growth and a shift towards liberalisation ')

    },
    {
        // key:2,
        title: 'Print Red Shirt',
        image: require('../assets/I3.png'),
        price: '$23.00',
        canclePrice: '$98.00',
        reate: '363',
        stars: require('../assets/stars.png'),
        Discription: ('Adam Smith Institute is delighted to announce the launch of the Enlightenment Essay competition.In recent years, the Arab World has witnessedremarkable economic growth and a shift towards liberalisation ')
    },
    {
        // key:3,
        title: 'Grey Valet Shirt',
        image: require('../assets/I4.png'),
        price: '$94.00',
        canclePrice: '$99.00',
        reate: '456',
        stars: require('../assets/stars.png'),
        Discription: (' The Adam Smith Institute is delighted to announce the launch of the Enlightenment Essay competition.In recent years, the Arab World has witnessedremarkable economic growth and a shift towards liberalisation ')

    },
];


const Favourt = ({ navigation }) => {
    const dimission=Dimensions.get('window');
    console.log(dimission);
    const [activeIndex, setActiveIndex] = useState(0);
    const slideDot = () => {
  return (
    slides.map((dot, index) => {

      if ( activeIndex===index ) {
      return (
          <View 
      key={index}

          style={{
            height: 10,
            width: 10,
            borderRadius: 50,
            backgroundColor: 'red',
            // marginHorizontal: '2%'
          }}>

          </View>
        )
      }
else 
  {
    return ( 
    <View
    key={index}

      style={{
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: 'grey',
        // borderWidth: .5,
        marginHorizontal: '2%'
      }}
    >
    </View>
  )
}
 
   
    }
    ))
}
    return (
        <View style={{
            flex:1,
        }}>
        <AppIntroSlider
            bounces={false}
            data={slides}
            showSkipButton={false}
            showDoneButton={false}
            showNextButton={false}
            dotStyle={false}
            activeDotStyle={false}
            
            renderItem={({ item,index }) => {
                return (
                    <View style={styles.container}>
                        
                        <View style={styles.imageContainer}>
                            <ImageBackground style={styles.images}
                                source={item.image}>
                                <View style={{
                                    height: 40,
                                    width: '80%',
                                    // backgroundColor:'red',
                                    alignSelf: 'center',
                                    marginTop: '3%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <AntDesign onPress={()=>navigation.navigate('Home')} name={'arrowleft'} size={29} color={'white'} />
                                    <Image style={{
                                        height: 20,
                                        width: 20,
                                    }} source={require('../assets/heart.png')}>

                                    </Image>

                                </View>
                            </ImageBackground>
                        </View>
                        
                        <View style={styles.texTC}>
                    <ScrollView> 
                            <View style={styles.titleContainer}>
                                <Text style={styles.timeZone}>
                                    Moset Recent
                                </Text>
                                <Text style={styles.titles}>
                                    {item.title}
                                </Text>
                            </View>
                            <View style={styles.rateConainer}>
                                <View style={styles.Preices}>
                                    <Text style={styles.price}>
                                        {item.price}
                                    </Text>
                                    <Text style={styles.cancleprice}>
                                        {item.canclePrice}
                                    </Text>
                                </View>
                                <View style={styles.ranksContainer}>
                                    <Image style={styles.ranks}
                                        source={item.stars}>
                                    </Image>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: 13,

                                    }}>
                                        {item.reate}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.discriptionContainer}>
                                <Text
                                    style={styles.discription} >
                                    {item.Discription}
                                </Text>
                            </View>
                            <View style={styles.colorText}>
                                <Text style={styles.colors}>
                                    Colors Avaliable
                                </Text>
                            </View>
                            <View style={styles.colorContaier}>
                                <View style={{
                                    height: 20,
                                    width: 20,
                                    backgroundColor: 'red',
                                    borderRadius: 50,
                                }}>

                                </View>
                                <View style={{
                                    height: 20,
                                    width: 20,
                                    backgroundColor: 'blue',
                                    borderRadius: 50,
                                }}>

                                </View>
                                <View style={{
                                    height: 20,
                                    width: 20,
                                    backgroundColor: 'orange',
                                    borderRadius: 50,
                                }}>

                                </View>
                              
                                <View style={{
                                    height: 30,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                }}>
                                    <View style={{
                                        height: 20,
                                        width: 20,
                                        backgroundColor: 'black',
                                        borderRadius: 50,

                                    }}>

                                    </View>
                                    <View style={{
                                        height: 2,
                                        width: 24,
                                        backgroundColor: 'green',
                                        alignSelf: 'flex-end',
                                        marginTop: 4,
                                    }}>

                                    </View>
                                </View>
                            </View>
                            <View style={styles.Size}>
                                <Text style={styles.colors}>
                                    Size
                                </Text>
                            </View>
                            <View style={styles.colorContaier}>
                                <View style={[styles.SizeContainer, {backgroundColor : '#60C69C',}]}>
                                    <Text style={styles.SizeText}>S</Text>
                                </View>
                                <View style={styles.SizeContainer}>
                                    <Text style={styles.SizeText}>M
                                    </Text>
                                </View>
                                <View style={styles.SizeContainer}>
                                    <Text style={styles.SizeText}>L
                                    </Text>
                                </View>
                                <View style={styles.SizeContainer}>
                                    <Text style={styles.SizeText}>XL
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.FirstButton}>
                                    <Text>
                                        Buy Now
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate('Cards')}
                                    style={styles.SecondButton}>
                                    <Text>
                                        Add Card
                                    </Text>
                                </TouchableOpacity>
                            </View>
                           
                            </ScrollView>
                        </View>
                    </View>
                )
            }}
        />
         {/* <SliderDots numDots={slides.length} activeIndex={activeIndex} /> */}
        
         </View>
    )
}
export default Favourt
const styles = StyleSheet.create({
    FirstButton: {
        height: 40,
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#60C69C'

    },
    SecondButton: {
        height: 40,
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#60C69C'

    },
    buttonContainer: {
        height: 50,
        width: '88%',
        // backgroundColor:'grey',
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '4%',
    },
    colorContaier: {
        height: 50,
        width: 130,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',


    },
    colors: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    container:
    {
        flex: 1,
        // backgroundColor: '#FFFDDD'
    },
    titleContainer:
    {
        marginTop: '2%',
        height: 50,
        width: 200,
        // borderEndWidth:2,
        marginLeft: 30,
        // backgroundColor:'red',
    },
    imageContainer: {
        height: 350,
        width: 392,
        borderWidth: 2,
        // justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    texTC: {
        // justifyContent: 'space-around',
        // alignItems: 'center',
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        // borderRadius:20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignSelf: 'center',
        marginTop: '-7%',
        // marginBottom:'7%'

    },
    images: {
        height: 380,
        width: 392,
        borderRadius: 10,
    },
    timeZone: {
        color: 'grey',
        fontSize: 14,

    },
    titles: {
        color: 'black',
        fontSize: 19,
        width: 'auto',
        fontWeight: 'bold',

    },
    rateConainer: {
        height: 50,
        width: '86%',
        // backgroundColor:'red',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    price: {
        color: '#E14F4F',
        fontSize: 19,
    },
    cancleprice: {
        color: 'black',
        fontSize: 19,
    },
    Preices: {
        height: 50,
        width: 130,
        // backgroundColor:'red',
        // alignSelf:'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    ranksContainer: {
        height: 50,
        width: 100,
        // backgroundColor:'red',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    discription: {
        color: 'black',
        fontSize: 11,
        textAlign: 'justify'
    }
    ,
    discriptionContainer: {
        height: 'auto',
        width: '88%',
        alignSelf: 'center',
    },
    colorText: {
        height: 30,
        // backgroundColor:'red',
        width: 110,
        // alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        marginLeft: 19,
    },
    Size: {
        height: 30,
        // backgroundColor:'red',
        width: 110,
        // alignItems: 'center',
        justifyContent: 'center',
        // marginTop: '10%',
        marginLeft: 19,
    },
    SizeText:
    {
        fontSize: 17,
        textAlign: 'center',
        color:'black'
    },
    SizeContainer:
    {
        height: 28,
        width: 28,
        backgroundColor: '#ececec',
        borderRadius: 50,
        // borderWidth:.9
        alignItems: 'center',
        justifyContent: 'center',

    }
})