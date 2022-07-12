import { Image, View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import { saberDigitalLogo } from '../../assets/images/index'

export default function Preload({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Image style={styles.imgLogo}
          source={saberDigitalLogo} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>SABER </Text>
          <Text style={styles.title}>DIGITAL</Text>
        </View>

      </View>

      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#A8A8A8" />
      </View>
    </View>
  )
}