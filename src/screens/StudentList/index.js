import { View, Text } from 'react-native'
import React from 'react'
import TopBarTwo from '../../components/TopBarTwo'
import CardStudent from './components/CardStudent'

export default function StudentList({ navigation }) {
  const goBack = () => {
    navigation.goBack()
  }
  return (
    <View >
      <TopBarTwo navigator={goBack} />
      <CardStudent />
    </View>
  )
}