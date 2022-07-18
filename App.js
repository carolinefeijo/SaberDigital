import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from './src/components/DrawerNavigator';
import LoginNavigator from './src/components/LoginNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const [logged, setLogged] = useState(false)

  //criar um state de usuario para armazenar as informacoes do usuario logado
  // enviar esse statdo para a tela login, semelhante na logged

  // usar o useEfect para verificar se no assync-storage se ele tem um email e senha registrado para alterar o logged
  
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