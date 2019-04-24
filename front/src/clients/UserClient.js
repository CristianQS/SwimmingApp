import { LOGIN } from '../constants/apiRoutesConstants'

export default function userClient (restClient) {
  function login (user) {
    return restClient.post(LOGIN,user)
  }
  function logout (user) {
    //return restClient.get()
  }
  
  return {
    login,
    logout
  }
}