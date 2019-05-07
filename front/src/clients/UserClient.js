import { LOGIN, USERS_BY_ID, AUTHENTICATE } from '../constants/apiRoutesConstants'
import { sha256 } from 'js-sha256'

export default function userClient (restClient) {
  function login (user) {
    user.password = sha256(user.password)
    return restClient.post(LOGIN(), user)
  }
  function authenticate () {
    return restClient.get(AUTHENTICATE())
  }
  function modifyUser (user) {
    user.password = sha256(user.password)
    return restClient.put(USERS_BY_ID(user.id),user)
  }
  return {
    login,
    authenticate,
    modifyUser
  }
}
