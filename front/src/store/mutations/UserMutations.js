import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT } from '../types/UserTypes'

export default {
  [USER_LOGIN]: (state, token) => {
    state.token = token
    sessionStorage.setItem("token", token)
  },
  [USER_SIGNUP]: (state, token) => {
    state.token = token
  },
  [USER_LOGOUT]: (state) => {
    state.token = {}
    sessionStorage.removeItem("token")
  }
}
