import { LOGIN } from '../constants/apiRoutesConstants'
import { sha256 } from 'js-sha256'

export default function userClient (restClient) {
  function login (user) {
    user.password = sha256(user.password)
    return restClient.post(LOGIN(), user)
  }
  return {
    login
  }
}
