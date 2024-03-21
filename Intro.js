import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Intro = () => {
    return (
        <ImageBackground style={styles.container}
            source={require('../assets/IntroBackground.png')}
        >
            <View style={{
                borderWidth: 1.3,
                height: 110,
                width: 110,
                borderRadius: 100,
                borderColor: '#77FFE7',
                elevation: 5,
                backgroundColor: '#55B58D',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Text style={{
                    color:'white',
                    fontSize:25,
                    fontWeight:'400',
                    alignItems:'center',
                }}>
                    30%
                </Text>
                <Text style={{
                    color:'white',
                    fontSize:25,
                    fontWeight:'400',
                }}>
                    OFF
                </Text>

            </View>
            
        </ImageBackground>
    )
}

export default Intro

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
    },
    TextCricle:
    {
        height: 60,
        width: 60,
        backgroundColor: '#B5B5B5',
        // color:'#B5B5B5',
        elevation: .5,

        // backgroundColor:'#77FFE7'
    }
})