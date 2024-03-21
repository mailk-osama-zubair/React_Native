import { View, Text, Image, TextInput, ScrollView, ImageBackground, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import {  } from 'react-native-reanimated/lib/typescript/Animated'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto'
// import { } from 'react-native-reanimated/lib/typescript/Animated';
const Home = ({navigation}) => {
    const [search, setSeearch] = useState('');
    const Data = [
        {
            // key:1,
            text: 'Balmin Bicker Jacket',
            image: require('../assets/I1.png'),
            price: '$47.00',
            canclePrice: '$79.00',
            reate: '453',
            stars: require('../assets/stars.png')
        },
        {
            // key:2,
            text: 'Balmin Bicker Jacket',
            image: require('../assets/I2.png'),
            price: '$47.00',
            canclePrice: '$79.00',
            reate: '453',
            stars: require('../assets/stars.png')
        },
        {
            // key:3,
            text: 'Balmin Bicker Jacket',
            image: require('../assets/I1.png'),
            price: '$47.00',
            canclePrice: '$79.00',
            reate: '453',
            stars: require('../assets/stars.png')
        },
    ]
    const Data2 = [
        {
            // key:1,
            text: 'Balmin Bicker Jacket',
            image: require('../assets/I1.png'),
            price: '$47.00',
            canclePrice: '$79.00',
            reate: '453',
            stars: require('../assets/stars.png')
        },
        {
            // key:2,
            text: 'Balmin Bicker Jacket',
            image: require('../assets/I3.png'),
            price: '$47.00',
            canclePrice: '$79.00',
            reate: '453',
            stars: require('../assets/stars.png')
        },
        {
            // key:3,
            text: 'Balmin Bicker Jacket',
            image: require('../assets/I2.png'),
            price: '$47.00',
            canclePrice: '$79.00',
            reate: '453',
            stars: require('../assets/stars.png')
        },

    ]
    return (
        <View style={{
            flex: 1,

        }}>
            <View style={styles.hearderContainer}>
                <View style={styles.hearder}>
                    <Image style={styles.drawer}
                        source={require('../assets/lines.png')}>
                    </Image>
                </View>
                <View style={styles.textConatainer}>
                    <Text style={styles.HexText}>
                        HEX
                    </Text>
                    <Text style={styles.wearText}>
                        WEAR
                    </Text>
                </View>
                <View style={styles.shoppingTrolley}>
                    <Image style={styles.TrolleyImage}
                        source={require('../assets/whiteTrolly.png')}>
                    </Image>
                </View>
            </View>
            <SafeAreaView style={styles.searchbox}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'search1'} size={23} color={'grey'} />
                </View>
                <TextInput style={styles.textInput}
                    placeholder='Search Product'
                    placeholderTextColor={'grey'}
                    value={search}
                    onChangeText={(text) => setSeearch(text)}
                />
            </SafeAreaView>
            <ScrollView>
                <View style={styles.adverstiseContainer}>
                    <Image source={require('../assets/boy.png')}>
                    </Image>
                    <Image
                        source={require('../assets/zig.png')}>
                    </Image>
                    <View style={styles.adTextConatiner}>
                        <View style={{
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                        }}>
                            <Text style={styles.SaleOffer}>
                                30% OFF
                            </Text>
                            <Text style={styles.SaleMonth}>
                                December Sale
                            </Text>
                        </View>
                        <Text style={styles.discription}>
                            Now in our store All colours t-shirts
                        </Text>
                        <TouchableOpacity
                            style={styles.OrderButtonView}>
                            <Text style={styles.orderText}>
                                Order Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Image
                        source={require('../assets/RightLine.png')}>

                    </Image>
                    <Image
                        source={require('../assets/Rboy.png')}>

                    </Image>
                </View>
                <View style={styles.InsctructionBox}>
                    <Text style={styles.InstructionTitle}>
                        Most Recently
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.seeMore}>
                            See more
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data={Data}
                        horizontal
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={()=>navigation.navigate('Details')} 
                                style={styles.ItemContainer}>
                                    <ImageBackground style={styles.imageContainer} source={item.image}>
                                        <View style={styles.imageHeader}>
                                            <View style={styles.Offer}>
                                                <Text style={styles.offerText}>
                                                    30% OFF
                                                </Text>
                                            </View>
                                            <View>
                                                <Fontisto name='heart-alt' size={19} color={'grey'} />
                                            </View>
                                        </View>
                                    </ImageBackground>
                                    <View style={styles.ItemTitleBox}>
                                        <Text style={styles.ItemTitle}>
                                            {item.text}
                                        </Text>
                                    </View>
                                    <View style={styles.priceBox}>
                                        <Text
                                            style={styles.pirceRate}>
                                            {item.price}
                                        </Text>
                                        <Text
                                            style={styles.canclePrice}>
                                            {item.canclePrice}
                                        </Text>
                                    </View>
                                    <View style={styles.rankView}>
                                        <Image source={item.stars}>
                                        </Image>
                                        <Text
                                            style={styles.rakeRate}>
                                            {item.reate}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }} />
                </View>
                <View style={styles.InsctructionBox}>
                    <Text style={styles.InstructionTitle}>
                        Best Offers
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.seeMore}>
                            See more
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data={Data2}
                        horizontal
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.ItemContainer}>
                                    <ImageBackground style={styles.imageContainer} source={item.image}>
                                        <View style={styles.imageHeader}>
                                            <View style={styles.Offer}>
                                                <Text style={styles.offerText}>
                                                    30% OFF
                                                </Text>
                                            </View>
                                            <View>
                                                <Fontisto name='heart-alt' size={19} color={'grey'} />
                                            </View>
                                        </View>
                                    </ImageBackground>
                                    <View style={styles.ItemTitleBox}>
                                        <Text style={styles.ItemTitle}>
                                            {item.text}
                                        </Text>
                                    </View>
                                    <View style={styles.priceBox}>
                                        <Text
                                            style={styles.pirceRate}>
                                            {item.price}
                                        </Text>
                                        <Text
                                            style={styles.canclePrice}>
                                            {item.canclePrice}
                                        </Text>
                                    </View>
                                    <View style={styles.rankView}>
                                        <Image source={item.stars}>
                                        </Image>
                                        <Text
                                            style={styles.rakeRate}>
                                            {item.reate}
                                        </Text>
                                    </View>
                                </View>
                            )
                        }} />
                </View>


            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    hearderContainer:
    {
        height: 50,
        // borderWidth:1,
        width: '90%',
        marginTop: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
    },
    hearder:
    {
        height: 35,
        width: 35,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 50,
        // alignSelf:'center'
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    drawer:
    {
        height: 14,
        width: 19,
    },
    textConatainer:
    {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    HexText:
    {
        fontSize: 16,
        color: '#FFAB09',
        fontWeight: '700'
    },
    wearText:
    {
        fontSize: 16,
        color: 'black',
        fontWeight: '700',
        marginLeft: '4%'
    },
    shoppingTrolley:
    {
        height: 35,
        width: 35,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 50,
        // alignSelf:'center'
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#60C69C',

    },
    searchbox:
    {
        height: 50,
        width: '80%',
        alignSelf: 'center',
        borderWidth: .1,
        borderRadius: 50,
        backgroundColor: 'white',
        // elevation:1,
        flexDirection: 'row',

    },
    TrolleyImage:
    {
        height: 18,
        width: 22,
    },
    iconContainer:
    {
        justifyContent
            : 'center',
        alignItems: 'center',
        width: 44,
        // borderWidth:1,
        paddingLeft: 20,
        height: 50,

    },
    textInput:
    {
        color: 'black',
        paddingLeft: 10,
    },
    adverstiseContainer:
    {
        alignSelf: 'center',
        borderRadius: 13,
        height: 160,
        width: 332,
        alignSelf: 'center',
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center',
        marginTop: '6%',
        backgroundColor: '#55B58D',
        justifyContent: 'space-around',
        // alignItems:'center',
    },
    adTextConatiner:
    {
        height: 160,
        width: 93,
        // borderWidth:2,
        justifyContent: 'center',
        alignItems: 'center'

    },
    SaleOffer:
    {
        color: '#FFB82F',
        fontSize: 20,
        fontWeight: '400',
        // borderWidth:1,
        // marginTop:10,
    },
    SaleMonth:
    {
        color: '#FFB82F',
        fontSize: 12,
        marginBottom: 7,
    },
    discription:
    {
        fontSize: 11,
        textAlign: 'justify',
        fontWeight: '600'
    },
    OrderButtonView:
    {
        height: 29,
        width: 80,
        borderWidth: 1.6,
        // elevation:3,
        borderRadius: 50,
        justifyContent: 'center',
        borderColor: '#77FFE7',
        backgroundColor: '#61CB9F',
        opacity: .9,
        marginTop: '9%'
    },
    orderText:
    {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    InsctructionBox:
    {
        height: 50,
        width: '90%',
        // borderWidth:1,
        alignSelf: 'center',
        marginTop: '1%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    InstructionTitle:
    {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'black',
    },
    seeMore:
    {
        color: '#00B86C',
    },
    ItemContainer:
    {

        height: 220,
        width: 160,
        // borderWidth:1,
        marginRight: 20,
        marginLeft: 20,
    },
    imageContainer:
    {
        height: 150,
    },
    imageHeader:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth:1,
        width: '94%',
        height: 26,
        alignItems: 'center',
        alignSelf: 'center',
    },
    Offer:
    {
        height: 22,
        width: 22,
        elevation: 3,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    offerText:
    {
        color: '#FFA800',
        fontSize: 7.7,
        fontWeight: '600',
        textAlign: 'center'
    },
    ItemTitleBox:
    {
        height: 25,
        // borderWidth:1,
        width: 'auto',
        justifyContent: 'center',
    },
    ItemTitle:
    {
        color: 'black',
        width: 'auto',
        fontWeight: 'bold',
        fontSize: 14,
    },
    priceBox:
    {
        height: 16,
        // borderWidth:1,
        width: 'auto',
        flexDirection: 'row',
    },
    pirceRate:
    {
        color: '#E14F4F',
        fontSize: 12,
    },
    canclePrice:
    {
        marginLeft: '3%',
        color: 'grey',
        fontSize: 12,
        textDecorationLine: 'line-through',
    },
    rankView:
    {
        height: 16,
        // borderWidth:1,
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rakeRate:
    {
        marginLeft: '3%',
        color: 'grey',
        fontSize: 12,
        // textDecorationLine: 'line-through',
    }
})
export default Home