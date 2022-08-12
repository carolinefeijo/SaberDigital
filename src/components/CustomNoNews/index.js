import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function CustomNoNews() {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Text style={styles.titleMain}>Não encontramos nenhuma noticia </Text>
            </View>
            <View >
                <Text style={styles.titleSecundary} >Por favor,verifique com a instituição ! </Text>
            </View>

        </View>
    )
}