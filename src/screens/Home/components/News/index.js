import { View, Image, Text } from 'react-native'
import { imgNewsRecent } from '../../../../assets/images'
import React from 'react'
import styles from './styles'
import DateNews from '../DateNews'

export default function News() {
    return (
        <View style={styles.container}>

            <View style={styles.biggerContainer}>
                <Image style={styles.imgBigger}
                    source={imgNewsRecent} />
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.titleNews}>Crianças descobrem o amor por ler</Text>
            </View>

            <DateNews />
        </View>
    )
}