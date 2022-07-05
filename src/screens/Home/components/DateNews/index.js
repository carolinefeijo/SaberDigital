import { View, Text, Image } from 'react-native'
import { iconCalendar } from '../../../../assets/icons'
import React from 'react'
import styles from './styles'

export default function DateNews() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.containerIcon}>
          <Image style={styles.iconCalendar}
            source={iconCalendar} />
        </View>
        <Text style={styles.title}>14</Text>
        <View style={{ backgroundColor: '#C4C4C4', width: 5, height: 5, borderRadius: 10, marginTop: 3, marginLeft: 5 }}></View>
        <Text style={styles.title}>de Janeiro</Text>
        <View style={{ backgroundColor: '#C4C4C4', width: 5, height: 5, borderRadius: 10, marginTop: 3, marginLeft: 5 }}></View>
        <Text style={styles.title}>de 2022</Text>

      </View>
    </View>
  )
}