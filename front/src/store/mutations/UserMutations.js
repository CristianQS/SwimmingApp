import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT, AUTHENTICATE,
MODIFY_USER, } from '../types/UserTypes'
import axios from 'axios'

export default {
  [USER_LOGIN]: (state, token) => {
    sessionStorage.setItem("token", token)
    var token = sessionStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] = 'Bearer '+token
  },
  [AUTHENTICATE]: (state, user) => {
    state.user = user
  },
  [USER_SIGNUP]: async (state, response) => {
    state.user = response.user
    sessionStorage.setItem("token", response.token)
    var token = sessionStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] = 'Bearer '+token
  },
  [MODIFY_USER]: (state, user) => {
    state.user = user
  },
  [USER_LOGOUT]: (state) => {
    sessionStorage.removeItem("token")
  }
}
