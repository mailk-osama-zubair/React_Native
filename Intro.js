import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Intro = ({ navigation }) => {
    return (
        <ImageBackground style={styles.container}
            source={require('../assets/Intro.png')}
        >
            <View style={styles.OfferContainer}>
                <Text style={styles.PercentOffer}>
                    30%
                </Text>
                <Text style={styles.OfferStatus}>
                    OFF
                </Text>

            </View>
            <View style={styles.NewArrivalsContainer}>
                <Text style={styles.NewArrivalsText}>
                    NEW ARRIVALS
                </Text>
                <Text style={styles.Day}>
                    TODAY
                </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}
                style={styles.navigationContainer}>
                <Text style={{
                    fontSize: 17,
                }}>
                    Get start
                </Text>
                <AntDesign name='arrowright' size={20} color={'white'} />

            </TouchableOpacity>

        </ImageBackground>
    )
}

export default Intro

const styles = StyleSheet.create({
    container:
    {
        height: '100%',
        width: '100%',
    },
    OfferContainer:
    {
        borderWidth: 2,
        height: 110,
        width: 110,
        borderRadius: 100,
        borderColor: '#77FFE7',
        elevation: 5,
        backgroundColor: '#55B58D',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10%',
        marginTop: '20%',
    },
    PercentOffer:
    {
        color: 'white',
        fontSize: 25,
        fontWeight: '400',
        alignItems: 'center',
    },
    OfferStatus:
    {
        color: 'white',
        fontSize: 25,
        fontWeight: '400',
    },
    NewArrivalsContainer:
    {
        height: 400,
        width: '76%',
        marginTop: '20%',
        justifyContent: 'flex-end',
        marginLeft: '7%',
        opacity: .9,
    },
    NewArrivalsText:
    {
        fontSize: 55,
        fontWeight: 'bold'
    },
    Day:
    {
        fontSize: 50,
        fontWeight: 'bold',

    },
    navigationContainer:
    {
        height: 30,
        width: '30%',
        marginTop: '10%',
        alignSelf: 'flex-end',
        marginRight: '5%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    }
})
