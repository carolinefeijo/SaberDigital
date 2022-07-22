import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import TopBarTwo from '../../components/TopBarTwo'
import styles from './styles'
import UserContext from '../../context/UserContext'
import { studentData } from '../../api/api'
import Loading from '../../components/Loading'

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

  function Card({ item }) {
    return (
      <TouchableOpacity
        activeOpacity={0.10}
        onPress={() => navigation.navigate('Diary', {
          student: { id },
        })}>
        <View style={styles.containerRender}>

          <View style={styles.mainContainer}>
            <Image style={styles.imgChildren}
              source={{ uri: item.image }} />

            <View style={styles.informationsContainer}>
              <Text style={styles.Name}>{item.firstName} {item.lastName}</Text>
              <Text style={styles.studentClass}>{item.studentClassName}</Text>
            </View>
          </View>

        </View >

      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container} >
      <TopBarTwo navigator={goBack} title={"Meus Filhos"} />

      {studentlist == null ?
        <Loading />
        :

        <View style={styles.container}>
          <SafeAreaView style={styles.safeAreaContainer}>
            <FlatList
              data={studentlist}
              renderItem={Card}
              keyExtractor={item => item.firstName}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
            />
          </SafeAreaView>
        </View>

      }
    </View>
  )
}


// const 
// navigation 
//https://reactnavigation.org/docs/params/