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
import { drawerIconCalendar } from '../../assets/icons';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen
                options={{
                    headerShown: false,
                    drawerIcon:( ) => ( 
                        <Image style={{width: 20, heigth: 20}}
                        source={drawerIconCalendar}/>
                    )
                }}
                name="Home"
                component={Home}
            />

            <Drawer.Screen
                options={{
                    headerShown: false
                }}
                name="Diario"
                component={Daily} />

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
                name="Cardapio"
                component={Menu}
            />

            <Drawer.Screen
                options={{
                    headerShown: false
                }}
                name="Solicitação"
                component={Solicitation}
            />

            <Drawer.Screen
                options={{
                    headerShown: false
                }}
                name="Calendario"
                component={Calendar}
            />

        </Drawer.Navigator>
    )
}