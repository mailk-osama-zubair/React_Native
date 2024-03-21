import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
const Cards = ({navigation}) => {
    const Data = [
        {
            // key:1,
            title: 'Balmin Bicker Jacket',
            image: require('../assets/I1.png'),
            price: '$47.00',
            canclePrice: '$79.00',
            reate: '453',
            stars: require('../assets/stars.png'),
            Discription: (' The Adam Smith Institute is delighted to announce the launch of the Enlightenment Essay competition.In recent years, the Arab World has witnessedremarkable economic growth and a shift towards liberalisation ')

        },
        {
            // key:2,
            title: 'Balmin Bicker Jacket',
            image: require('../assets/I2.png'),
            price: '$47.00',
            canclePrice: '$79.00',
            reate: '453',
            stars: require('../assets/stars.png'),
            Discription: (' The Adam Smith Institute is delighted to announce the launch of the Enlightenment Essay competition.In recent years, the Arab World has witnessedremarkable economic growth and a shift towards liberalisation ')
        },
        {
            // key:3,
            title: 'Balmin Bicker Jacket',
            image: require('../assets/I1.png'),
            price: '$47.00',
            canclePrice: '$79.00',
            reate: '453',
            stars: require('../assets/stars.png'),
            Discription: (' The Adam Smith Institute is delighted to announce the launch of the Enlightenment Essay competition.In recent years, the Arab World has witnessedremarkable economic growth and a shift towards liberalisation ')

        },]
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign onPress={()=>navigation.navigate('Home')}
                 name={'arrowleft'} size={29} color={'white'} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Cart
                </Text>
            </View>
            <View>
                <FlatList
                    data={Data}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.ListContainer}>
                                <View style={styles.imageTextContainer}>
                                    <Image style={styles.images} source={item.image}></Image>
                                    <View style={styles.textContainer}>

                                        <View style={styles.titleBox}>
                                            <Text style={styles.TitleText}>
                                                {item.title}
                                            </Text>
                                        </View>
                                        <View style={styles.PriceBox}>
                                            <Text style={styles.price}>
                                                {item.price}
                                            </Text>
                                            <Text style={styles.cancleprice}>
                                                {item.canclePrice}
                                            </Text>

                                        </View>
                                        <View style={styles.ranksBox}>
                                            <Image source={item.stars}>

                                            </Image>
                                            <Text style={styles.cancleprice}>
                                                {item.reate}
                                            </Text>

                                        </View>
                                    </View>
                                    <View style={styles.DeletIconBox}>

                                        <Image style={styles.DeletIcon} source={require('../assets/Delete.png')}>

                                        </Image>
                                        <View style={styles.IncrementBox}>
                                            <Entypo name={'plus'} size={19} color={'black'} />
                                            <Text style={styles.Numbers}>
                                                1
                                            </Text>
                                            <Entypo name={'minus'} size={19} color={'black'} />
                                        </View>

                                    </View>
                                </View>

                            </View>
                        )
                    }} />
            </View>
            <View style={styles.AmountBox}>
                <View style={styles.ratetotalView}>
                    <Text style={styles.rateTitle}>
                        Sub Total
                    </Text>
                    <Text style={styles.rate}>
                        $32.00
                    </Text>
                </View>
                <View style={styles.ratetotalView}>
                    <Text style={styles.rateTitle}>
                        Tex
                    </Text>
                    <Text style={styles.rate}>
                        $4.00
                    </Text>
                </View>
                <View style={styles.ratetotalView}>
                    <Text style={styles.rateTitle}>
                        Dilivery Charges
                    </Text>
                    <Text style={styles.rate}>
                        $22.00
                    </Text>
                </View>
                <Image style={styles.LineBar} source={require('../assets/Line5.png')} >

                </Image>
                <View style={styles.TotalAmountView}>
                    <Text style={styles.rateTitle}>
                        Total Amount
                    </Text>
                    <Text style={styles.rate}>
                        $232.00
                    </Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Payment')}
            style={styles.Button}>
<Text style={styles.ButtonTitle}>
Checkout
</Text>
</TouchableOpacity>
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    imageTextContainer:
    {
        height: 100,
        width: 220,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    titleContainer: {
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red'

    },
    title: {
        color: 'black',
        fontSize: 26,
        fontWeight: '700',

    },
    ListContainer: {
        height: 100,
        width: "90%",
        alignSelf: 'center',
        backgroundColor: 'red',
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 10,
        marginTop: '3%'
    },
    images:
    {
        height: 90,
        width: 90
    },
    textContainer:
    {
        height: 80,
        width: 130,
        // backgroundColor:'green',
        marginLeft: 10,
    },
    titleBox:
    {
        height: 20,
        width: 130,

    },
    price: {
        color: '#E14F4F',
        fontSize: 13,
    },
    cancleprice: {
        color: 'black',
        fontSize: 13,
    },
    PriceBox:
    {
        height: 30,
        width: 100,
        // backgroundColor:'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    TitleText:
    {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',

    },
    ranksBox:
    {
        height: 30,
        width: 100,
        // backgroundColor:'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    DeletIconBox:
    {
        height: 80,
        width: 80,
        // borderWidth: 1,
        justifyContent: 'space-between',
    },
    DeletIcon:
    {
        // justifyContent:'flex-end',
        alignSelf: 'flex-end',
        marginTop: 3,
        height: 20,
    },
    IncrementBox:
    {
        height: 20,
        width: 50,
        // backgroundColor:'green',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Numbers:
    {
        color: 'black',
        fontSize: 17
    },
    AmountBox:
    {
        height: 200,
        width: '88%',
        backgroundColor: 'white',
        elevation: 5,
        alignSelf: 'center',
        marginTop: '9%',
        borderRadius: 20,
    },
    ratetotalView:
    {
        height: 30,
        width: '88%',
        // borderWidth:1,
        alignSelf: 'center',
        marginTop: '4%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    rateTitle:
    {
        fontSize: 19,
        color: 'black',
        fontWeight: '400',
    },
    rate:
    {
        fontSize: 17,
        color: '#E14F4F'
    },
    LineBar:
    {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '3%'
    },
    TotalAmountView:
    {
        height: 30,
        width: '88%',
        // borderWidth:1,
        alignSelf: 'center',
        marginTop: '4%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
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
    }
})