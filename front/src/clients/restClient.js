import axios from 'axios'

export const restClient = {
  get: (url, params = {}) => axios.get(url, params),
  post: (url, params = {}) => axios.post(url, params),
}