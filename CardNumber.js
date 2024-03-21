import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const CardNumber = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign onPress={() => navigation.navigate('Cards')}
                    name={'arrowleft'} size={29} color={'white'} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Card Number
                </Text>
            </View>
            <View style={styles.CardNumberbox}>
                <View style={styles.digitsBox}>
                    <Text style={styles.digits}>
                        111
                    </Text>
                    <Text style={styles.digits}>
                        222
                    </Text>
                    <Text style={styles.digits}>
                        333
                    </Text>
                    <Text style={styles.digits}>
                        444
                    </Text>
                    <Text style={styles.digits}>
                        555
                    </Text>
                </View>
            </View>
            <View style={styles.passowrdTitleContainer}>
                <Text style={styles.title}>
                    Password
                </Text>
            </View>
            <View style={styles.CardNumberbox}>
                <View style={styles.passwordBox}>
                    <View style={styles.passowrd}>
                    </View>
                    <View style={styles.passowrd}>
                    </View>
                    <View style={styles.passowrd}>
                    </View>
                    <View style={styles.passowrd}>
                    </View>
                    <View style={styles.passowrd}>
                    </View>
                </View>
            </View>
            <View style={styles.CDContainer}>
                <View style={styles.CCVContainer}>
                    <Text style={styles.title}>
                        CCV
                    </Text>

                    <View style={styles.box}>
                        <View style={styles.CCVBox}>
                            <View style={styles.passowrd}>
                            </View>
                            <View style={styles.passowrd}>
                            </View>
                            <View style={styles.passowrd}>
                            </View>
                        </View>
                    </View>
                </View>



                <View style={styles.DateContainer}>
                    <Text style={styles.title}>
                        Deposit Date
                    </Text>

                    <View style={styles.box}>
                        <View style={styles.dataBox}>
                            <Text style={styles.date}>
                                9/21
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.ButtonBox}>
                <TouchableOpacity onPress={() =>navigation.navigate('Confirm')}
                    style={styles.Button}>
                    <Text style={styles.ButtonTitle}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardNumber

const styles = StyleSheet.create({
    DateContainer: {
        height: 90,
        // backgroundColor:'yellow',
        width: '40%',
    },
    container:
    {
        flex: 1,
    },
    header:
    {
        height: 40,
        width: '88%',
        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf:'center',
    },
    titleContainer:
    {
        height: 40,
        width: '50%',
        justifyContent: 'center',
        marginTop: '19%',
        marginLeft: '6%',
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: '400',

    },
    CardNumberbox:
    {
        height: 70,
        width: '89%',
        backgroundColor: 'white',
        elevation: 3,
        alignSelf: 'center',
        borderRadius: 16,
        justifyContent: 'center'
    },
    digits:
    {
        color: 'grey',
        fontSize: 19,
    },
    digitsBox:
    {
        height: 50,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: '4%'
    },
    passwordBox:
    {
        height: 50,
        // borderWidth: 1,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: '4%'
    },
    passowrd:
    {

        height: 8,
        width: 8,
        backgroundColor: 'black',
        borderRadius: 50,
    },
    passowrdTitleContainer:
    {
        height: 40,
        width: '50%',
        // borderWidth: 1,
        justifyContent: 'center',
        marginTop: '5%',
        marginLeft: '6%',
    },
    CCVContainer: {
        height: 90,
        width: '40%',
        // borderWidth:1,
        // backgroundColor:'red',
        justifyContent: 'center',
        // marginTop: '5%',
        // marginLeft: '6%',
    },
    box: {
        height: 60,
        backgroundColor: 'white',
        elevation: 3,
        width: '90%',
        borderRadius: 16,
        // alignItems:'center',
        justifyContent: 'center',
        // backgroundColor:'green'

    },
    CCVBox: {
        height: 40,
        width: '70%',
        // borderWidth:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: '3%'
    },
    dataBox:
    {
        height: 40,
        width: '50%',
        // borderWidth:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: '3%'
    },
    date:
    {
        color: 'black',
        fontSize: 19,
        fontWeight: '600',
        // alignSelf:'center',
        alignItems: 'center',
    },
    CDContainer:
    {
        height: 90,
        // borderWidth:1,
        width: '89%',
        alignSelf: 'center',
        marginTop: '4%',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        height: 250,
        // borderWidth:1,
        justifyContent: 'flex-end',
    }
})