import React from 'react';
import { View, Text, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Home from '../../screens/Home'
import Daily from '../../screens/Daily';
import Chat from '../../screens/Chat';
import Menu from '../../screens/Menu';
import Solicitation from '../../screens/Solicitation';
import Calendar from '../../screens/Calendar';
import CustomDrawer from '../CustomDrawer';
import { drawerIconHome, drawerIconBook, drawerIconChat, drawerIconMenu, drawerIconNotification, drawerIconCalendario } from '../../assets/icons';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#2DA7FF',
                drawerActiveTintColor: 'white',
                drawerLabelStyle: {
                    fontFamily: 'Quicksand-Bold',
                    fontSize: 14,
                }
            }}
        >
            <Drawer.Screen
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image style={{ width: 18, height: 20, }}
                            source={drawerIconHome} />
                    )
                }}
                name="Home"
                component={Home}
            />

            <Drawer.Screen
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image style={{ width: 18, height: 17 }}
                            source={drawerIconBook} />
                    )
                }}
                name="Diario"
                component={Daily} />

            <Drawer.Screen
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image style={{ width: 18, height: 19 }}
                            source={drawerIconChat} />
                    )
                }}
                name="Chat"
                component={Chat}
            />

            <Drawer.Screen
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image style={{ width: 18, height: 18 }}
                            source={drawerIconMenu} />
                    )
                }}
                name="Cardapio"
                component={Menu}
            />

            <Drawer.Screen
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image style={{ width: 18, height: 22 }}
                            source={drawerIconNotification} />
                    )
                }}
                name="Solicitação"
                component={Solicitation}
            />

            <Drawer.Screen
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image style={{ width: 18, height: 21 }}
                            source={drawerIconCalendario} />
                    )
                }}
                name="Calendario"
                component={Calendar}
            />


        </Drawer.Navigator>
    )
}