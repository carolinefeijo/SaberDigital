import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { iconArrow } from '../../../../assets/icons'
import styles from './styles'

export default function TopBar({ navigator }) {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <TouchableOpacity
                    onPress={() => { navigator() }}>
                    <Image
                        source={iconArrow} />
                </TouchableOpacity>
                <Text style={styles.title}>Meus Filhos</Text>
            </View>
        </View >
    )
}