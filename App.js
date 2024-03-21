import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Intro from './Intro';
import Home from './Home';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favourt from './Favourt';
import Purches from './Purches';
import Profile from './Profile';
import Details from './Details';
import Cards from './Cards';
import Payment from './Payment';
import CardNumber from './CardNumber';
import ConfirmPayment from './ConfirmPayment';
const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();
const Bottomtab = () => {
  const[isshow,setIsShow]=useState(false);
  useEffect(()=>{
    setIsShow(!isshow);
  },[])
  return(
    <Bottom.Navigator screenOptions={{ headerShown: false ,
      tabBarActiveTintColor:'#60C69C',
      tabBarStyle:{
        height: 60,
        marginBottom:3,
      }
    }}>
      <Bottom.Screen name='Dekstop' component={Home}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View>
                {
                  
                  <Image source={focused? require('./assets/activeHome.png'):require('./assets/inactiveHome.png')}>

                  </Image>
                  
                }
              </View>
              // <AntDesign name='home' size={size} color={color} focused={focused} />
            );
          },
        }}
      />
      <Bottom.Screen name='Favourt' component={Favourt}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View>
              {
                
                <Image source={focused? require('./assets/activeHeart.png'):require('./assets/inActiveHeart.png')}>

                </Image>
                
              }
            </View>);
          },
        }} />
      <Bottom.Screen name='Purches' component={Purches}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View>
                {
                  
                  <Image source={focused? require('./assets/Trolly.png'):require('./assets/inActiveTrolly.png')}>

                  </Image>
                  
                }
              </View> );
          },
        }}
      />
      <Bottom.Screen name='Profile' component={Profile}
        options={{

          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Ionicons name='person' size={size} color={color} focused={focused} />
            );
          },
        }} />
    </Bottom.Navigator>

  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Details' component={Details} />

       <Stack.Screen name='Confirm' component={ConfirmPayment}/>
        <Stack.Screen name='Payment' component={Payment}/>
        <Stack.Screen name='Home' component={Bottomtab} />
        <Stack.Screen name='Cards' component={Cards} />
        <Stack.Screen name='Intro' component={Intro} />
        <Stack.Screen name='CardNumber' component={CardNumber}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App