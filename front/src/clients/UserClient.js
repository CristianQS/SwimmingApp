import { LOGIN, AUTHENTICATE } from '../constants/apiRoutesConstants'
import { sha256 } from 'js-sha256'

export default function userClient (restClient) {
  function login (user) {
    user.password = sha256(user.password)
    return restClient.post(LOGIN(), user)
  }
  function authenticate () {
    return restClient.get(AUTHENTICATE())
  }
  return {
    login,
    authenticate
  }
}
