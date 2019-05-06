import { LOGIN } from '../constants/apiRoutesConstants'
import { sha256 } from 'js-sha256'

export default function userClient (restClient) {
  function login (user) {
    console.log(user.password)
    user.password = sha256(user.password)
    console.log(user.password)
    return restClient.post(LOGIN(), user)
  }
  function logout (user) {
    //  return restClient.get()
  }

  return {
    login,
    logout
  }
}
