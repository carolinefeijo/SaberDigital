import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { profile } from '../../assets/data/mock'
import { getRole, getGenderRole } from '../../helpers'
import { drawerIconGoOut, drawerIconSetting } from '../../assets/icons';

export default function CustomDrawer(props) {
    return (
        <View style={styles.container}>
            <View style={styles.lineContainer}>

                <View style={styles.dataUserContainer}>
                    <Image style={styles.imgProfile}
                        source={profile.image} />

                    <View style={styles.userContainer}>
                        <Text style={styles.username}>{profile.firstName}</Text>
                        <Text style={styles.role}>{getGenderRole(profile.role, profile.gender)}</Text>
                    </View>
                </View>

            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={styles.lineContainer}></View>
            <View style={styles.mainContainerSetting}>

                <View style={styles.mainSetting}>
                    <Image source={drawerIconSetting} />
                    <TouchableOpacity onPress={() => { navigator() }}>
                        <Text style={styles.titleSetting}>Configurações</Text>
                    </TouchableOpacity>
                    <View></View>
                </View>

                <View style={styles.mainGoOut}>
                    <Image source={drawerIconGoOut} />
                    <TouchableOpacity onPress={() => { navigator() }}>
                        <Text style={styles.titleGoOut}>Sair</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}