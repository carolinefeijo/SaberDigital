import { View, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { agendaescolarLogo } from '../../../../assets/images/index'

export default function LogoBar() {
  return (
    <View style={styles.container}>

      <Image style={styles.imgLogo}
        source={agendaescolarLogo} />

    </View>
  )
}