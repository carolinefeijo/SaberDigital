import { View, SafeAreaView, FlatList} from 'react-native'
import React from 'react'
import styles from './styles'
import RenderStudentList from '../RenderStudentList'

export default function CardStudent({data}) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <FlatList
                    data={data}
                    renderItem={RenderStudentList}
                    keyExtractor={(item) => item.id}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
        </View>
    )
}