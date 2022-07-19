import { View, Text } from 'react-native'
import React from 'react'
import TopBar from './Components/TopBar'
import styles from './styles'
import UserContext from '../../context/UserContext'
import CardChildren from './Components/CardChildren'

export default function Daily({ navigation }) {
  const goBack = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <TopBar navigator={goBack} />
      <CardChildren />
    </View>
  )
}