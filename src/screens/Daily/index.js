import { View, Text } from 'react-native'
import React from 'react'
import TopBar from './Components/TopBar'
import styles from './styles'

export default function Daily({ navigation }) {
  const goBack = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <TopBar navigator={goBack} />
    </View>
  )
}