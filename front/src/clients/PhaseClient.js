import { PHASES_BY_CHRONO_ID } from '../constants/apiRoutesConstants'

export default function ChronometerClient(restClient) {
  function getPhasesByChrono (params, id) {
    return restClient.get(PHASES_BY_CHRONO_ID(id),params)
  }
  function addPhase (params) {
    return restClient.post(PHASES_BY_CHRONO_ID(params.chrono),params)
  }

  return {
    getPhasesByChrono,
    addPhase
  }
}