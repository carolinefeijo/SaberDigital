import { View, Text } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import TopBarTwo from '../../components/TopBarTwo'
import CardStudent from './components/CardStudent'
import styles from './styles'
import UserContext from '../../context/UserContext'
import { studentData } from '../../api/api'

export default function StudentList({ navigation }) {

  const [studentlist, setStudentlist] = useState(null)

  const user = useContext(UserContext)

  const GetData = async () => {
    const data = await studentData(user.studentId)
    setStudentlist(data)
  }

  useEffect(() => {
    GetData()
  }, [])


  const goBack = () => {
    navigation.goBack()
  }
  const goDiary = () => {
    navigation.navigate('Diary')
  }


  return (
    <View style={styles.container} >
      <TopBarTwo navigator={goBack} title={"Meus Filhos"} />

      {studentlist == null ?
        <Text>ahhaha</Text>
        :
        <CardStudent data={studentlist} navigator={goDiary} />
      }
    </View>
  )
}
