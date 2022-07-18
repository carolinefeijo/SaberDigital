import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from './src/components/DrawerNavigator';
import LoginNavigator from './src/components/LoginNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from './src/context/UserContext'

export default function App() {
  const [logged, setLogged] = useState(false)

  const [userLogged, setUserLogged] = useState(null)

  const setUser = (user) => {
    setUserLogged(user)
  }

  useEffect(() => {
    const checkUser = async () => {
      const email = await AsyncStorage.getItem('@EMAIL');
      
    }
    checkUser();
  }, []);

  //criar um state de usuario para armazenar as informacoes do usuario logado
  // enviar esse statdo para a tela login, semelhante na logged

  // usar o useEfect para verificar se no assync-storage se ele tem um email e senha registrado para alterar o logged

  return (
    <NavigationContainer >
       <UserContext.Provider value={userLogged}>
     
      {userLogged != null ?
        <DrawerNavigator />
        :
        <LoginNavigator logged={logged} setLogged={setLogged} setUser={setUser} />
      }
        </UserContext.Provider>
    </NavigationContainer>
  );
}
