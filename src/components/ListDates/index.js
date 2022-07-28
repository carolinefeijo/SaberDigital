import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import moment from 'moment'
import { getCurrentWeekDays } from '../../helpers'

export default function ListDates({ SetCurrentDay, currentDay}) {
  function isSameDay(date) {
    return moment(currentDay).isSame(date, 'day')
  }

  const listDays = getCurrentWeekDays();

  function renderItem({ item }) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => { !isSameDay(item.date) && SetCurrentDay(item.date) }}>

          {isSameDay(item.date) ?
            <View style={styles.currentContainer} >
              <Text style={styles.titleDayWhite}>{item.label}</Text>
              <Text style={styles.titleNumberWhite}> {item.day}</Text>
            </View>
            :
            <View style={styles.mainContainer}>
              <Text style={styles.titleDay}>{item.label}</Text>
              <Text style={styles.titleNumber}> {item.day}</Text>
            </View>
          }
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

