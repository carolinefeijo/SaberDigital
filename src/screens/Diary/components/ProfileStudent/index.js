import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

export default function ProfileStudent({ profile }) {
    return (
        <View style={styles.container}>

            <View style={styles.profileImgContainer}>
                <Image style={styles.imageProfile}
                    source={{ uri: profile.image }} />
            </View>

            <View style={styles.profileTextContainer}>
                <Text style={styles.title}>{profile.firstName} {profile.lastName}</Text>
            </View>

        </View>
    )
}