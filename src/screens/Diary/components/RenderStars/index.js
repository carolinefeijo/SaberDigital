import { View, Image } from 'react-native'
import React from 'react'
import { starGray, starYellow } from '../../../../assets/icons'

export default function RenderStars({ stars }) {
    return (
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Image style={{ width: 11.08, height: 11.08 }}
                source={starYellow} />

            <Image style={{ width: 11.08, height: 11.08, marginLeft: 2 }}
                source={stars >= 2 ? starYellow : starGray} />

            <Image style={{ width: 11.08, height: 11.08, marginLeft: 2 }}
                source={stars >= 3 ? starYellow : starGray} />

            <Image style={{ width: 11.08, height: 11.08, marginLeft: 2 }}
                source={stars >= 4 ? starYellow : starGray} />

            <Image style={{ width: 11.08, height: 11.08, marginLeft: 2 }}
                source={stars >= 5 ? starYellow : starGray} />
        </View>
    )
}
