import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { profile } from '../../assets/data/mock'
import * as C from '../../constants/colors';
import { getRole, getGenderRole } from '../../helpers'

export default function CustomDrawer(props) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#F4F4F4'}}>
                <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center' }}>

                    <Image style={{ width: 55, height: 55, borderRadius: 55 }}
                        source={profile.image} />

                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text>{profile.firstName}</Text>
                        <Text>{getGenderRole(profile.role, profile.gender)}</Text>
                    </View>

                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View>
                <Text>sd</Text>
            </View>
        </View>
    )
}