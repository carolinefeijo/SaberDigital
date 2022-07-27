import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import {getCurrentWeekDays} from '../../helpers'

export default function ListDates({SetCurrentDay}) {

  const listDays = getCurrentWeekDays();

  function renderItem({ item }) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {SetCurrentDay(item.date) }}>
          <View style={styles.mainContainer}>
            <Text style={styles.titleDay}>{item.label}</Text>
            <Text style={styles.titleNumber}> {item.day}</Text>
          </View>
        </TouchableOpacity>
      </View>

    )
  }
  return (
    <View style={styles.ViewFlatlist}>
      <FlatList
        data={listDays}
        renderItem={renderItem}
        keyExtractor={(item) => item.day}
        horizontal={true}
        showsHorizontalScrollIndicator={false} />
    </View>
  )
}

