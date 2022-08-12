import { View, ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading'
import styles from './styles'
import TopBarTwo from '../../components/TopBarTwo'
import ProfileStudent from './components/ProfileStudent'
import { getDiaryData, studentSingleData } from '../../api/api'
import ListDates from '../../components/ListDates'
import Card from './components/Card'
import moment from 'moment'
import { useIsFocused } from "@react-navigation/native";
import ModalImage from './components/ModalImage'
import WarningMessage from './components/WarningMessage'
import CustomNoNews from '../../components/CustomNoNews'



export default function Diary({ navigation, route }) {
 
  const focus = useIsFocused();

  const { studentId } = route.params

  const [profile, setProfile] = useState(null)
  const [diary, setDiary] = useState(null)
  const [modalImageController, setModalImageController] = useState(false)

  const [imageCard, setImageCard] = useState(null)
  const [descriptionCard, setDescriptionCard] = useState(null)

  const day = moment().startOf('week').utc().format()                 // inicia com o dia atual 
  const [currentDay, setCurrentDay] = useState(day)  // estado que armazena o dia clicado

  const GetProfile = async () => {
    const data = await studentSingleData(studentId, 'small')
    setProfile(data)
  }

  const GetDiary = async (studentId, timeCreate) => {

    const diary = await getDiaryData(studentId, timeCreate)
    setDiary(diary)
  }
  const SetCurrentDay = (date) => {
    setDiary('loading')
    setCurrentDay(date)
  }

  const disableModal = () => {
    setImageCard(null)
    setDescriptionCard(null)
    setModalImageController(false)
  }
  const enableModal = (image, description) => {
    setImageCard(image)
    setModalImageController(true)
    setDescriptionCard(description)
  }

  useEffect(() => {
    if (currentDay == null) setCurrentDay(day)
    GetDiary(studentId, currentDay)

    if (profile == null) GetProfile()

    if (!focus) {
      setCurrentDay(null)
      setDiary(null)
      setProfile(null)
    }

  }, [currentDay, focus])

  const goBack = () => navigation.goBack()

  return (
    <>
      <ModalImage modalImageController={modalImageController} disableModal={disableModal} image={imageCard} description={descriptionCard} />

      <View style={styles.container}>


        {profile != null && diary != null && currentDay != null ?
          <>
            <TopBarTwo navigator={goBack} title={"Diario"} />

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 10 }} >
              {profile != null && <ProfileStudent profile={profile} />}
              <ListDates SetCurrentDay={SetCurrentDay} currentDay={currentDay} day={day} />

              {diary != "loading" ?
                diary != "" ?
                  <>
                    {diary?.map((item, key) => {
                      return <Card key={key} item={item} enableModal={enableModal} />
                    })
                    }
                  </>

                  :
                  <WarningMessage title={"Nenhuma atividade lançada até o momento"} /> // mensagem de não tem atividade component 
                  
                :

                <View style={{ marginTop: 50 }}>
                  <Loading />
                </View>
              }

            </ScrollView>
          </>

          :
          <Loading />
        }

      </View>
    </>
  )
}

