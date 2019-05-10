import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT, AUTHENTICATE,
  MODIFY_USER, GET_USERS_BY_CLUB } from '../types/UserTypes'
import { userClient } from '../../clients/factory'

export default {
  [USER_LOGIN]: async ({ commit }, user) => {
    try {
      var response = await userClient.login(user)
      commit(USER_LOGIN, response.data.token)
    } catch (error) {
      return error
    }
  },
  [USER_SIGNUP]: async ({ commit }, user) => {
    try {
      let response = await userClient.signUp(user)
      commit(USER_SIGNUP, { user: user, token: response.data.token })
    } catch (error) {
      return error
    }
  },
  [MODIFY_USER]: async ({ commit }, user) => {
    let response = await userClient.modifyUser(user)
    commit(MODIFY_USER, response.data)
  },
  [AUTHENTICATE]: async ({ commit }, user) => {
    let response = await userClient.authenticate()
    commit(AUTHENTICATE, response.data[0])
    return response.data[0]
  },
  [USER_LOGOUT]: async ({ commit }) => {
    commit(USER_LOGOUT)
  },
  [GET_USERS_BY_CLUB]: async ({ commit }, id) => {
    let response = await userClient.getUsersByClub(id)
    commit(GET_USERS_BY_CLUB, response.data)
  }
}
