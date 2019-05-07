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
  [USER_SIGNUP]: async (state, user) => {
    sessionStorage.setItem("token", token)
    state.user = user
  },
  [MODIFY_USER]: (state, user) => {
    state.user = user
  },
  [USER_SIGNUP]: (state, token) => {
  },
  [USER_LOGOUT]: (state) => {
    sessionStorage.removeItem("token")
  }
}
