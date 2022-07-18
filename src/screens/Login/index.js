import { ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import LogoBar from './components/LogoBar'
import TextWelcome from './components/TextWelcome'
import InputLogin from './components/InputLogin'
import ButtonLogin from './components/ButtonLogin'
import axios from 'axios'

export default function Login(props) {
  const { logged, setLogged } = props.route.params

  const [email, setEmail] = useState('')
  const [password, SetPassword] = useState('160812')

  const baseUrl = 'https://saber-digital-api.herokuapp.com'

  async function loginData() {

    await axios.post(`${baseUrl}/responsible/login`, {
       email, 
       password
      })
      .then((response) => {
        console.log(response.data.responsible)

        if(response.data.message == "authorized user") {
          //pegar os dados do responsible e colocar dentro de um estado global
          //Antes de logar usar o assync-storage-communit para salvar o email e a senha na memoria do celular
          setLogged(true)
        }
      }).catch((error) => {
        // se retornar um erro, abrir modal de senha e usuario incorreto
        console.log(error)
      })
  }

  return (
    <ScrollView style={styles.container}>
      <LogoBar />
      <TextWelcome />
      <InputLogin email={email} setEmail={setEmail} />
      <ButtonLogin setLogged={setLogged} loginData={loginData} />
    </ScrollView>

  )
}