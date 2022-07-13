import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import * as C from '../../../../constants/colors'
import { iconEye, iconEyeHide } from '../../../../assets/icons'

export default function InputLogin({ email, setEmail }) {
    const [security, setSecurity] = useState(true)
    return (
        <View style={styles.container}>

            <View style={styles.passwordInputContainer}>
                <TextInput
                    style={styles.emailInput}
                    placeholder="Email"
                    placeholderTextColor={C.darkGrey.color30}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.dividerContainer}></View>

            <View style={styles.divider}>

                <View style={styles.passwordInputContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Senha"
                        placeholderTextColor={C.darkGrey.color30}
                        secureTextEntry={security}
                    />

                    <TouchableOpacity style={styles.buttonLogin}
                        onPress={() => { security ? setSecurity(false) : setSecurity(true) }}>
                        <Image style={styles.iconEye}
                            source={security ? iconEye : iconEyeHide} />
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                    onPress={() => { }}>
                    <Text style={styles.resetPassword}>Esqueceu sua senha?</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}