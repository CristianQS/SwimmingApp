import { LOGIN, USERS_BY_ID, AUTHENTICATE, SIGN_UP,
  USERS_BY_IDCLUB } from '../constants/apiRoutesConstants'
import { sha256 } from 'js-sha256'

export default function userClient (restClient) {
  function login (user) {
    user.password = sha256(user.password)
    return restClient.post(LOGIN(), user)
  }
  function signUp (user) {
    user.password = sha256(user.password)
    return restClient.post(SIGN_UP(), user)
  }
  function authenticate () {
    return restClient.get(AUTHENTICATE())
  }
  function modifyUser (user) {
    user.password = sha256(user.password)
    return restClient.put(USERS_BY_ID(user.id), user)
  }
  function getUsersByClub (id) {
    return restClient.get(USERS_BY_IDCLUB(id))
  }
  return {
    login,
    authenticate,
    modifyUser,
    signUp,
    getUsersByClub
  }
}
