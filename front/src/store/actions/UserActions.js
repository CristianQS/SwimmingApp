import { USER_LOGIN, USER_SIGNUP } from '../types/UserTypes'
import { userClient } from '../../clients/factory'

export default {
  [USER_LOGIN]: ({commit}, user) => {
    return userClient.login(user)
  }
}