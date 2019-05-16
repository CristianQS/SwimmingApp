import { ADD_CHRONO, GET_CHRONO_BY_IDUSER,GET_CHRONO_BY_IDACTIVITY,
  DELETE_CHRONO } from '../types/ChronoTypes'

export default {
  [GET_CHRONO_BY_IDUSER]: async (state, data) => {
    state.chronos = data
  },
  [GET_CHRONO_BY_IDACTIVITY]: async (state, data) => {
    state.chronos = data
  },
  [ADD_CHRONO]: (state, data) => {
    state.chronos.push(data)
  },
  [DELETE_CHRONO]: (state, id) => {
    state.chronos = []
  }
}