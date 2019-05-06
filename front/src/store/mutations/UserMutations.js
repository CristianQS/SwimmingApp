import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT } from '../types/UserTypes'

export default {
  [USER_LOGIN]: (state, token) => {
    sessionStorage.setItem("token", token)
  },
  [USER_SIGNUP]: (state, token) => {
  },
  [USER_LOGOUT]: (state) => {
    sessionStorage.removeItem("token")
  }
}
