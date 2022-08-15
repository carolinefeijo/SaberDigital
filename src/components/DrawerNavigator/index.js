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
import Loading from '../Loading';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function DrawerNavigator() {

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
                        <Image style={{ width: 18, height: 15.16, }}
                            source={drawerIconBook} />
                    ),

                }}
                name="Diario"
                component={DiaryScreens}

            />

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

export function DiaryScreens() {

    const user = useContext(UserContext);
    const { studentId } = user
    const initialRoute = studentId.length > 1 ? "StudentList" : "Diary"

    return (
        <Stack.Navigator
            initialRouteName={initialRoute}>

            <Stack.Screen
                options={{
                    headerShown: false

                }}
                name="StudentList"
                component={StudentList}
            />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Diary"
                component={Diary}
                initialParams={{ studentId }}
            />
        </Stack.Navigator>
    )
}

// receber studentId para pegar as informações do aluno daquele pai que so tem 1 filho 