import { View, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { starGray, starYellow } from '../../../../assets/icons'

export default function RenderStars({ stars }) {
    return (
        <View style={styles.container}>
            <Image style={styles.img}
                source={starYellow} />

            <Image style={styles.img}
                source={stars >= 2 ? starYellow : starGray} />

            <Image style={styles.img}
                source={stars >= 3 ? starYellow : starGray} />

            <Image style={styles.img}
                source={stars >= 4 ? starYellow : starGray} />

            <Image style={styles.img}
                source={stars >= 5 ? starYellow : starGray} />
        </View>
    )
}
