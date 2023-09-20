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
  getCharacters(perPage, page) {
    return apiClient.get('/characters?_limit=' + perPage + '&_page=' + page)
  },
  getCharacter(id) {
    return apiClient.get('/characters/' + id)
  }
}
