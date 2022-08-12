import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { iconArrow } from '../../assets/icons'
import styles from './styles'

export default function TopBarTwo({ navigator, title }) {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <TouchableOpacity
                    onPress={() => { navigator() }}>
                    <Image style={styles.iconArrow}
                        source={iconArrow} />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
                <View></View>
            </View>
        </View >
    )
}
