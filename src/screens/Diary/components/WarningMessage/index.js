import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function WarningMessage() {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Nenhuma atividade lançada até o momento</Text>
            </View>
        </View>
    )
}