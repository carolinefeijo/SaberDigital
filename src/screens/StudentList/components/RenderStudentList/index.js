import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { agendaescolarLogo } from '../../../../assets/images/index';

export default function RenderStudentList() {
    return (
        <TouchableOpacity onPress={() => { }}>

            <View style={styles.container}>

                <View style={styles.mainContainer}>
                    <Image style={styles.imgChildren}
                        source={agendaescolarLogo} />


                    <View style={styles.informationsContainer}>
                        <Text style={styles.Name}>Luis Henrique dos santos</Text>
                        <Text style={styles.studentClass}>Maternal II</Text>
                    </View>
                </View>

            </View >

        </TouchableOpacity>
    )
}
