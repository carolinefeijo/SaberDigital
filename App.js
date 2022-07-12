import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from './src/components/DrawerNavigator';
import LoginNavigator from './src/components/LoginNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const [logged, setLogged] = useState(false)

  return (
    <NavigationContainer >
      {logged ?
        <DrawerNavigator />
        :
        <LoginNavigator logged={logged} setLogged={setLogged} />
      }
    </NavigationContainer>
  );
}