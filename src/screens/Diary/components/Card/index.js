import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

export default function Card({ item }) {
    
    return (
        <View style={styles.container}>

            <View style={styles.mainContainer}>

                <View style={{ flexDirection: 'row' }}>

                    <View style={styles.toView}>
                        <TouchableOpacity
                            activeOpacity={0.2}
                            onPress={() => { }}>
                            <Image style={styles.iconEye}
                                source={item.eye} />
                        </TouchableOpacity>
                        <Text style={styles.titleHour}>{item.hour}</Text>
                    </View>

                    <View style={styles.lineView}></View>

                    <View style={{ flexDirection: 'column', width: '80%', height: 80, }}>

                        <View style={styles.containerActivity}>
                            <Text style={styles.titleDay}>{item.title}</Text>
                            <Image style={styles.Icon}
                                source={item.icon} />
                        </View>

                        <View style={{ paddingHorizontal: 8, marginTop: 5 }}>
                            <Text style={styles.titleDetails}>{item.details}</Text>
                        </View>
                        {/* 
                        <View style={{ paddingHorizontal: 8, marginTop: 10 }}>
                            <Image style={styles.iconStars}
                                source={item.stars} />
                        </View> */}


                    </View>

                </View>
            </View>
        </View>

    )
}
