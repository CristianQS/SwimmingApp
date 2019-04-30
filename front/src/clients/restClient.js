import axios from 'axios'

export const restClient = {
  get: (url, values = {}) => axios.get(url, {params: values}),
  post: (url, params = {}) => axios.post(url, params),
}