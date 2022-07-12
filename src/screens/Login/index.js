import { ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import LogoBar from './components/LogoBar'
import TextWelcome from './components/TextWelcome'
import InputLogin from './components/InputLogin'
import ButtonLogin from './components/ButtonLogin'

export default function Login(props) {
const {logged, setLogged} = props.route.params

  const [email, setEmail] = useState('')
  const [password, SetPassword] = useState('')

  return (
    <ScrollView style={styles.container}>
      <LogoBar />
      <TextWelcome />
      <InputLogin email={email} setEmail={setEmail} />
      <ButtonLogin setLogged={setLogged} />
    </ScrollView>

  )
}