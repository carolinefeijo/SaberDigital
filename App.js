import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from './src/components/DrawerNavigator';


export default function App() {
  
  return (
    <NavigationContainer >
      <DrawerNavigator />
    </NavigationContainer>
  );
}