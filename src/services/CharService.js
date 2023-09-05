import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/JusticePlague/fan-website-build',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCharacters() {
    return apiClient.get('/characters')
  },
  getCharacter(callname) {
    return apiClient.get('/character/' +  callname )
  }
}
