import { View, SafeAreaView, FlatList, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import RenderStudentList from '../RenderStudentList'

export default function CardStudent({ data, navigator }) {
    

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <RenderStudentList item={item} navigator={navigator} />}
                    keyExtractor={item => item.firstName}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
        </View>
    )
}