import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import TopBarTwo from '../../components/TopBarTwo'

export default function Diary({ navigation}) {
  const goBack = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <TopBarTwo navigator={goBack} title={"Diario"} />
    </View>
  )
}