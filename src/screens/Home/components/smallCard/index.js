import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import DateNews from '../DateNews'

export default function SmallCard({ item, navigator }) {
    return (
      <View style={styles.container}>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => { navigator() }}>

          <View style={styles.mainContainer}>

            <View style={styles.imgContainer}>
              <Image style={styles.imgNew}
                source={item.uri}>
              </Image>
            </View>

            <View style={styles.textsContainer}>
              <Text style={styles.title}>
                {item.title}
              </Text>

              <Text ellipsizeMode='tail' numberOfLines={2}
                style={styles.textsDescription}>
                {item.description}
              </Text>

              <DateNews />
            </View>

          </View>
        </TouchableOpacity>

      </View >
    )
  }



