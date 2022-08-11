import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { formatHour, formatHoursLastUpdate } from '../../../../helpers'
import IconCard from '../IconCard'
import { iconEye } from '../../../../assets/icons'
import RenderStars from '../RenderStars'

export default function Card({ item, enableModal }) {
    return (
        <View style={styles.container}>

            <View style={styles.mainContainer}>

                <View style={styles.toView}>
                    {item.image &&
                        <TouchableOpacity
                            activeOpacity={0.2}
                            onPress={() => { enableModal(item.image, item.description) }}>
                            <Image style={styles.iconEye}
                                source={iconEye} />

                        </TouchableOpacity>
                    }
                    <Text style={styles.titleHour}>{formatHour(item.timeCreate)}</Text>
                </View>
                
                <View style={styles.lineView}></View>

                <View style={styles.mainCardContainer}>

                    <View style={styles.containerActivity}>
                        <Text style={styles.titleDay}>{item.title}</Text>
                        <IconCard title={item.title} />
                    </View>

                    <View style={styles.containerDetails}>
                        <Text style={styles.titleDetails}>{item.details}</Text>
                    </View>

                    <View style={styles.starsContainer}>
                        <RenderStars stars={item.stars} />
                        <Text style={styles.titleHourAgo}>{formatHoursLastUpdate(item.timeCreate)}</Text>
                    </View>

                </View>

            </View>
        </View>

    )
}
