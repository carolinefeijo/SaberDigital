import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

export default function RenderStudentList({ item, navigator }) {
    return (
        <TouchableOpacity
            activeOpacity={0.12}
            onPress={() => {navigator() }}>

            <View style={styles.container}>

                <View style={styles.mainContainer}>
                    <Image style={styles.imgChildren}
                        source={{ uri: item.image }} />

                    <View style={styles.informationsContainer}>
                        <Text style={styles.Name}>{item.firstName} {item.lastName}</Text>
                        <Text style={styles.studentClass}>{item.studentClassName}</Text>
                    </View>
                </View>

            </View >

        </TouchableOpacity>
    )
}
