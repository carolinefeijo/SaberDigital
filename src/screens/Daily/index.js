import { View, Text } from 'react-native'
import React from 'react'
import TopBarSecundar from '../../components/TopBarSecundar'

export default function Daily({ navigation }) {
  const goBack = () => {
    navigation.goBack()
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TopBarSecundar navigator={goBack} />
    </View>
  )
}