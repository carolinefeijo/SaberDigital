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
export async function studentData(studentData) {

  return await axios.post(`${baseUrl}/student/list`, {
    studentId : studentData ,
    
  })
    .then(async (response) => {
      return response.data
    }).catch((error) => {

      return
    })
}
