import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { net } from '../../assets/icons';

export default function WithoutInternet() {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Image style={styles.imgConnection}
                    source={net} />
                <Text style={styles.title}>Verifique a conexão com a internet</Text>
                <View></View>
            </View>
        </View>
    )
}