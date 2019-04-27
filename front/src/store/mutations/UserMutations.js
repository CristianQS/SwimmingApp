import { USER_LOGIN, USER_SIGNUP } from '../types/UserTypes'

export default {
  [USER_LOGIN]: (state, token) => {
    state.token = token
  },
  [USER_SIGNUP]: (state, token) => {
    state.token = token
  }
}