import { CHRONOS, CHRONOS_BY_ID } from '../constants/apiRoutesConstants'

export default function ChronometerClient (restClient) {
  function getChornoByIdActivity (params) {
    return restClient.get(CHRONOS(), params)
  }
  function getChornoByIdUser (params) {
    return restClient.get(CHRONOS(), params)
  }
  function uploadChrono (params) {
    return restClient.post(CHRONOS(), params)
  }
  function deleteChrono (id) {
    return restClient.delete(CHRONOS_BY_ID(id))
  }
  return {
    uploadChrono,
    deleteChrono,
    getChornoByIdUser,
    getChornoByIdActivity
  }
}
