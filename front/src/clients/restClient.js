import axios from 'axios'
var token = sessionStorage.getItem('token')
axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

export const restClient = {
  get: (url, values = {}) => axios.get(url, { params: values }),
  post: (url, params = {}) => axios.post(url, params),
  put: (url, params = {}) => axios.put(url, params),
  delete: (url) => axios.delete(url)
}
