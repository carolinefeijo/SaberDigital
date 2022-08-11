import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loading() {
    return (
        <View style={{ flex: 1, marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size={45} color="#A8A8A8" />
        </View>
    )
}