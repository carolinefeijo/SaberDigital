import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from 'react-native'
import DrawerNavigator from './src/components/DrawerNavigator';
import LoginNavigator from './src/components/LoginNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from './src/context/UserContext'
import { loginData } from './src/api/api';

export default function App() {
  const [userLogged, setUserLogged] = useState(null)

  const setUser = (user) => {
    setUserLogged(user)
  }

  const checkUser = async () => {
    const email = await AsyncStorage.getItem('@EMAIL');
    const password = await AsyncStorage.getItem('@PASSWORD');
  
    if (email != null) {
      const data = await loginData(email, password)

      if(data == "not authorized") {
        setUserLogged(null) 
      } else {
        setUserLogged(data)
      }
  }
}

  useEffect( () => {
    checkUser();
  }, []);

  return (
    <NavigationContainer >
      <UserContext.Provider value={userLogged}>

        {userLogged != null ?
          userLogged == '' ?
            <View>
              <Text> loading</Text>
            </View>
            :
            <DrawerNavigator />
          :
          <LoginNavigator setUser={setUser} />
        }
      </UserContext.Provider>
    </NavigationContainer>
  );
}