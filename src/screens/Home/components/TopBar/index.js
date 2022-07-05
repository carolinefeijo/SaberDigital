import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { iconDrawer } from '../../../../assets/icons/index'
import styles from './styles'

export default function TopBar({ navigator }) {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => { navigator() }}>
          <Image style={styles.iconDrawer}
            source={iconDrawer} />
        </TouchableOpacity>
        <Text style={styles.title}>Saber Digital</Text>
        <View></View>
      </View>
    </View>
  )
}