import { ADD_PHASE, GET_PHASES_BY_CHRONO } from '../types/PhaseTypes'
import { phaseClient } from '../../clients/factory'

export default {
  [GET_PHASES_BY_CHRONO]: async ({ commit }, params) => {
    try {
      commit(GET_PHASES_BY_CHRONO, [])
      let response = await phaseClient.getPhasesByChrono(params)
      commit(GET_PHASES_BY_CHRONO, response.data)
      return response.data[0]
    } catch (error) {
      return error
    }
  },
  [ADD_PHASE]: async ({ commit }, params) => {
    try {
      commit(ADD_PHASE, [])
      let response = await phaseClient.addPhase(params)
      commit(ADD_PHASE, response.data)
      return response.data[0]
    } catch (error) {
      return error
    }
  }
}
