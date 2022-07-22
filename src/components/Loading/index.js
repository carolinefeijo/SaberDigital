import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loading() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <ActivityIndicator 
                size="large"
                color="#A8A8A8"
                 />
        </View>
    )
}