import { USER_LOGIN, USER_SIGNUP } from '../types/UserTypes'
import { userClient } from '../../clients/factory'

export default {
  [USER_LOGIN]: async ({commit}, user) => {
    var token = await userClient.login(user)
    commit(USER_LOGIN,token)
  }
}