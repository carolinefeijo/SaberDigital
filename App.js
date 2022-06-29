import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

import Home from './src/screens/Home';
import Diario from './src/screens/Diario';
import Chat from './src/screens/Chat';
import Solicitaçao from './src/screens/Solicitaçao';
import Cardapio from './src/screens/Cardapio';
import Calendario from './src/screens/Calendario';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home">
        <Drawer.Screen
          options={{
            headerShown: false
          }}
          name="Inicio"
          component={Home}
        />

        <Drawer.Screen
          options={{
            headerShown: false
          }}
          name="Diario"
          component={Diario} />

        <Drawer.Screen
          options={{
            headerShown: false
          }}
          name="Chat"
          component={Chat}
        />

        <Drawer.Screen
          options={{
            headerShown: false
          }}
          name="Solicitação"
          component={Solicitaçao}
        />

        <Drawer.Screen
          options={{
            headerShown: false
          }}
          name="Cardápio"
          component={Cardapio}
        />

        <Drawer.Screen
          options={{
            headerShown: false
          }}
          name="Calendário"
          component={Calendario}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}