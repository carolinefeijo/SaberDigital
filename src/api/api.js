import axios from "axios"

const baseUrl = 'https://saber-digital-api.herokuapp.com'

export async function loginData(email, password) {

  return await axios.post(`${baseUrl}/responsible/login`, {
    email,
    password
  })
    .then(async (response) => {
      if (response.data.message == "authorized user") {
        return response.data.responsible
      }
    }).catch((error) => {

      return 'not authorized'
    })
}
export async function studentData(responsibleId, type) {

  return await axios.get(`${baseUrl}/student/list/responsible`, {
    params: {
      responsibleId,
      type
    }
  })
    .then(async (response) => {
      return response.data
    }).catch((error) => {

      return
    })
}

export async function studentSingleData(studentId,type) {

  return await axios.get(`${baseUrl}/student/list/single`, {
    params: {
      studentId,
      type
    }
  })
    .then(async (response) => {
      return response.data
    }).catch((error) => {

      return
    })
}
