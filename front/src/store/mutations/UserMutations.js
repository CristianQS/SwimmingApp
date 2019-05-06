import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT, AUTHENTICATE } from '../types/UserTypes'

export default {
  [USER_LOGIN]: (state, token) => {
    sessionStorage.setItem("token", token)
  },
  [AUTHENTICATE]: (state, user) => {
    state.user = user
  },
  [USER_SIGNUP]: (state, token) => {
  },
  [USER_LOGOUT]: (state) => {
    sessionStorage.removeItem("token")
  }
}
