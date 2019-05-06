import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT, AUTHENTICATE } from '../types/UserTypes'
import { userClient } from '../../clients/factory'

export default {
  [USER_LOGIN]: async ({commit}, user) => {
    try {
      var response =  await userClient.login(user)
      commit(USER_LOGIN,response.data.token)
    } catch (error) {
      return error
    }
  },
  [USER_SIGNUP]: async ({commit}, user) => {
    return true
  },
  [AUTHENTICATE]: async ({commit}, user) => {
    let response = await userClient.authenticate()
    commit(AUTHENTICATE,response.data[0])
  },
  [USER_LOGOUT]: async ({commit}) => {
    commit(USER_LOGOUT)
  }
}