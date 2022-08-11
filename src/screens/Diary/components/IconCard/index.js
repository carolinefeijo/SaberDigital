import { View, Image } from 'react-native'
import React from 'react'
import { food, sleep, restroom, extraclass, educationalActivity, fall, Cheers,error } from '../../../../assets/icons/index'

export default IconCard = ({ title }) => {
    switch (title) {
        case 'Alimentação':
            return (
                <View>
                    <Image style={{ width: 10, height: 10 }}
                        source={food} />
                </View>
            )

        case 'Sono':
            return (
                <View>
                    <Image style={{ width: 12, height: 9 }}
                        source={sleep} />
                </View>
            )

        case 'Aula extra':
            return (
                <View>
                    <Image style={{ width: 10, height: 10 }}
                        source={extraclass} />
                </View>
            )

        case 'Saude':
            return (
                <View>
                    <Image style={{ width: 12, height: 12 }}
                        source={Cheers} />
                </View>
            )

        case 'Atividade educacional':
            return (
                <View>
                    <Image style={{ width: 12, height: 12 }}
                        source={educationalActivity} />
                </View>
            )

        case 'Ocorrência':
            return (
                <View>
                    <Image style={{ width: 12, height: 12 }}
                        source={fall} />
                </View>
            )

        case 'Banheiro':
            return (
                <View>
                    <Image style={{ width: 10, height: 12 }}
                        source={restroom} />
                </View>
            )
        default:
            return (
                <View>
                    <Image style={{ width: 10, height: 10 }}
                        source={error} />
                </View>
            )
    }


}