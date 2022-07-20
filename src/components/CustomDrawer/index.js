import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import styles from './styles'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { drawerIconGoOut, drawerIconSetting } from '../../assets/icons';
import UserContext from '../../context/UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function CustomDrawer(props) {
    const user = useContext(UserContext);
    console.log(user.studentId[1])

    async function exitApp() {
        await AsyncStorage.removeItem('@EMAIL')
        await AsyncStorage.removeItem('@PASSWORD')
    }
    return (
        <View style={styles.container}>
            <View style={styles.lineContainer}>

                <View style={styles.dataUserContainer}>
                    <Image style={styles.imgProfile}
                        source={{ uri: user.image }} />

                    <View style={styles.userContainer}>
                        <Text style={styles.username}>{user.firstName}</Text>
                        <Text style={styles.role}>Responsável</Text>
                    </View>
                </View>

            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={styles.lineContainer}></View>
            <View style={styles.mainContainerSetting}>

                <View style={styles.mainSetting}>
                    <Image style={styles.iconSettings}
                        source={drawerIconSetting} />
                    <TouchableOpacity onPress={() => { navigator() }}>
                        <Text style={styles.titleSetting}>Configurações</Text>
                    </TouchableOpacity>
                    <View></View>
                </View>

                <View style={styles.mainGoOut}>
                    <Image
                        style={styles.iconGoOut}
                        source={drawerIconGoOut} />
                    <TouchableOpacity onPress={() => { exitApp() }}>
                        <Text style={styles.titleGoOut}>Sair</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}