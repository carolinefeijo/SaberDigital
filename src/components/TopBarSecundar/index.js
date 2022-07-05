import React from 'react'
import { View, Text, Image } from 'react-native'
import { iconArrow } from '../../assets/icons'
import styles from './styles'

export default function TopBarSecundar() {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Image
                    source={iconArrow} />
                <Text style={styles.title}>Meus Filhos</Text>
            </View>
        </View>
    )
}