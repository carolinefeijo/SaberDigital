import { View, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import TopBarTwo from '../../components/TopBarTwo'
import ProfileStudent from './components/ProfileStudent'
import { studentSingleData } from '../../api/api'
import ListDates from '../../components/ListDates'
import Card from './components/Card'

export default function Diary({ navigation, route }) {
  const { studentId } = route.params

  const [profile, setProfile] = useState(null)

  const GetProfile = async () => {
    const data = await studentSingleData(studentId, 'small')
    setProfile(data)
  }
  useEffect(() => {
    GetProfile()
  }, [])

  const goBack = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <TopBarTwo navigator={goBack} title={"Diario"} />
      <ScrollView  showsVerticalScrollIndicator={false} style={{ marginBottom: 10 }} >
        {profile != null && <ProfileStudent profile={profile} />}
        <ListDates />
        <FlatList
          data={dates}
          renderItem={Card}
          keyExtractor={(item) => item}
           />
      </ScrollView>
    </View>
  )
}


// FAZER ROTA DA API COM AS INFORMAÇÕES DAS ATIVIDADES . 
// CRIAR UM ESTADO QUE VAI ARMAZENA ESSAS INFORMAÇÕES . 
// PEGAR ESSAS INFORMAÇÕES E CARREGA-LAS ( USEEFECT , AO INICIAR LOADING E EM SEGUE CONSULTA A API)

// CRIAR UM ESTADO PRO DIA ATUAL , PARA QUE ELE POSSA RECEBER O BORDER AZUL QUANDO ESTIVER NAQUELE DIA 
// CRIANDO UM CONDIÇÃO IF ( ESTADO TAL) E O DIA ATUAL ? , ELE RECEBE AQUELE STYLE BORDERBLUECONTAINER NAQUELE "CARD" . 


// AO ENTRAR NA TELA DIARIO ESTARÁ MARCADO COM BORDA AZUL NO DIA ATUAL E ASSIM VAI CARREGA AS ATIVIDADES DAQUELE DIA .
// AO TROCAR O DIA VAI TER UM LOADING PARA PODER FAZER A CONSULTA A API E RETORNAR COM AS ATIVIDADES DAQUELE DIA .
// QUANDO ESTIVER UM DIA A FRENTE ( DIA SEGUINTE) , VAI TER UMA MENSAGEM DE  "NÃOO HÁ ATIVIDADES AINDA" . 







const dates = [
  {
    Activity: 'Alimentação',
    icon: require('../../assets/icons/Activity/alimentacion.png'),
    Details: 'Café da manhã',
    hour: "12:30",
    stars: require('../../assets/icons/Activity/stars.png'),
    eye: require('../../assets/icons/Activity/eye.png')
  },

  {
    Activity: 'Alimentação',
    icon: require('../../assets/icons/Activity/alimentacion.png'),
    Details: 'Café da manhã',
    hour: "12:30",
    stars: require('../../assets/icons/Activity/stars.png'),
    eye: require('../../assets/icons/Activity/eye.png')
  },

  {
    Activity: 'Alimentação',
    icon: require('../../assets/icons/Activity/alimentacion.png'),
    Details: 'Café da manhã',
    hour: "12:30",
    stars: require('../../assets/icons/Activity/stars.png'),
    eye: require('../../assets/icons/Activity/eye.png')
  },

  {
    Activity: 'Alimentação',
    icon: require('../../assets/icons/Activity/alimentacion.png'),
    Details: 'Café da manhã',
    hour: "12:30",
    stars: require('../../assets/icons/Activity/stars.png'),
    eye: require('../../assets/icons/Activity/eye.png')
  },

  {
    Activity: 'Alimentação',
    icon: require('../../assets/icons/Activity/alimentacion.png'),
    Details: 'Café da manhã',
    hour: "12:30",
    stars: require('../../assets/icons/Activity/stars.png'),
    eye: require('../../assets/icons/Activity/eye.png')
  },
]


