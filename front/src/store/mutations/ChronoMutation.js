import { ADD_CHRONO, GET_CHRONO_BY_IDUSER,GET_CHRONO_BY_IDACTIVITY,
  DELETE_CHRONO } from '../types/ChronoTypes'

export default {
  [GET_CHRONO_BY_IDUSER]: async (state, data) => {
    state.chronos = data
  },
  [GET_CHRONO_BY_IDACTIVITY]: async (state, data) => {
    for (let i = 0; i < data.length; i++) {
      state.chronos.push(data[i])      
    }
    state.chronos = state.chronos.filter(chrono => chrono.user_id == state.user.id)
  },
  [ADD_CHRONO]: (state, data) => {
    let request = {
      activity_id: data.activity,
      id: data.id,
      time: data.time,
      timechrono: data.timechrono,
      user_id: data.user
    }
    state.chronos.push(request)
  },
  [DELETE_CHRONO]: (state, id) => {
    state.chronos = []
  }
}