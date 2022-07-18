import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

export default function ButtonLogin({ setLogged, loginData }) {
    return (
        <TouchableOpacity
            onPress={() => { loginData()}}>

            <View style={styles.mainContainer}>
                <Text style={styles.title}>Entrar</Text>
            </View>
            
        </TouchableOpacity>
    )
}