import { ADD_PHASE, GET_PHASES_BY_CHRONO } from '../types/PhaseTypes'

export default {
  [ADD_PHASE]: async (state, data) => {
    state.phases.push(data)
  },
  [GET_PHASES_BY_CHRONO]: async (state, data) => {
    state.phases.push(data)
  }
}
