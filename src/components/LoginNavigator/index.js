import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../screens/Login'
import Preload from '../../screens/Preload'

const Stack = createStackNavigator();

export default function LoginNavigator({logged, setLogged, setUser}) {
  return (
    <Stack.Navigator
    initialRouteName='Preload'
      screenOptions={{
        headerShown: false
      }}>

      <Stack.Screen
        name="Login"
        component={Login}
        initialParams={{ logged, setLogged, setUser}} 
         />

      <Stack.Screen
        name="Preload"
        component={Preload} />

    </Stack.Navigator>
  );
}
