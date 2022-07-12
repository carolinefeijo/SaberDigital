import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function TextWelcome() {
  return (
    <View style={styles.container}>

      <View style={styles.mainContainer}>
        <Text style={styles.title}>Bem Vindo</Text>
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.information}>Insira seu email e senha</Text>
      </View>

    </View>
  )
}