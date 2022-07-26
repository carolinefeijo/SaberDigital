import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

export default function ListDates() {
  function renderItem({ item }) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => { }}>
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
        data={dates}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false} />
    </View>
  )
}

// deixa com styles border azul quando estiver naquele dia e renderiza aquele dia as informações
const dates = [
  {
    id: '24/12/2008t:00:00',
    day: '20',
    label: 'Seg'
  },
  {
    id: '24/12/2008t:00:00',
    day: '21',
    label: 'Ter'
  },
  {
    id: '24/12/2008t:00:00',
    day: '22',
    label: 'Qua'
  },
  {
    id: '24/12/2008t:00:00',
    day: '23',
    label: 'Qui'
  },
  {
    id: '24/12/2008t:00:00',
    day: '24',
    label: 'Qui'
  }
]