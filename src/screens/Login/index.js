import { ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import LogoBar from './components/LogoBar'
import TextWelcome from './components/TextWelcome'
import InputLogin from './components/InputLogin'
import ButtonLogin from './components/ButtonLogin'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginData } from '../../api/api'

export default function Login(props) {
  const { setUser } = props.route.params
  const [email, setEmail] = useState('')
  const [password, SetPassword] = useState('')

  async function login() {
    const data = await loginData(email, password)

    if (data == 'not authorized') {
      console.log('login nao autorizado, criar um modal para informar')
    } else {
      await AsyncStorage.setItem('@EMAIL', email)
      await AsyncStorage.setItem('@PASSWORD', password)
      setUser(data)
    }
  }

  return (
    <ScrollView style={styles.container}>
      <LogoBar />
      <TextWelcome />
      <InputLogin email={email} setEmail={setEmail} password={password} SetPassword={SetPassword} />
      <ButtonLogin loginData={login} />
    </ScrollView>

  )
}