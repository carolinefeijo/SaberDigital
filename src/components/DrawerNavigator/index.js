import React, { useContext } from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';
import * as C from '../../constants/colors';
import Home from '../../screens/Home'
import Chat from '../../screens/Chat';
import Menu from '../../screens/Menu';
import Diary from '../../screens/Diary'
import Solicitation from '../../screens/Solicitation';
import Calendar from '../../screens/Calendar';
import CustomDrawer from '../CustomDrawer';
import StudentList from '../../screens/StudentList'
import { drawerIconHome, drawerIconBook, drawerIconChat, drawerIconMenu, drawerIconNotification, drawerIconCalendario } from '../../assets/icons';
import UserContext from '../../context/UserContext';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function DrawerNavigator() {
    const user = useContext(UserContext);
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: C.blue.color10,
                drawerActiveTintColor: C.white.color0,
                drawerLabelStyle: {
                    fontFamily: 'Quicksand-Bold',
                    fontSize: 14,
                }
            }}
            initialRouteName="Home"
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
                        <Image style={{ width: 18, height: 20, }}
                            source={drawerIconHome} />
                    ),
                    drawerItemStyle: { display: 'none' }
                }}
                name="Diary"
                component={Diary}
             
            />

            <Drawer.Screen
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image style={{ width: 18, height: 15 }}
                            source={drawerIconBook} />
                    )
                }}
                name="Diario"
                component={user.studentId.length > 1 ? StudentList : Diary} />

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
                        <Image style={{ width: 18, height: 23 }}
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
                        <Image style={{ width: 18, height: 21 }}
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