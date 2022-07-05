import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function WelcomeBar() {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Seja Bem-Vindo</Text>
                <Text style={styles.descriptionTitle}>Confira o nosso mural do mês de Abril</Text>
            </View>
        </View>
    )
}