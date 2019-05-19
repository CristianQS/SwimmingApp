import { ADD_CHRONO, DELETE_CHRONO, GET_CHRONO_BY_IDUSER,
  GET_CHRONO_BY_IDACTIVITY } from '../types/ChronoTypes'
import { chronometerClient } from '../../clients/factory'

export default {
  [GET_CHRONO_BY_IDACTIVITY]: async ({ commit }, params) => {
    try {
      commit(GET_CHRONO_BY_IDUSER, [])
      let response = await chronometerClient.getChornoByIdActivity(params)
      commit(GET_CHRONO_BY_IDACTIVITY, response.data)
      return response.data
    } catch (error) {
      return error
    }
  },
  [GET_CHRONO_BY_IDUSER]: async ({ commit }, params) => {
    try {
      commit(GET_CHRONO_BY_IDUSER, [])
      let response = await chronometerClient.getChornoByIdUser(params)
      commit(GET_CHRONO_BY_IDUSER, response.data)
      return response.data
    } catch (error) {
      return error
    }
  },
  [ADD_CHRONO]: async ({ commit }, params) => {
    try {
      let response = await chronometerClient.uploadChrono(params)
      commit(ADD_CHRONO, response.data)
      return response.data
    } catch (error) {
      return error
    }
  },
  [DELETE_CHRONO]: async ({ commit }, id) => {
    try {
      let response = await chronometerClient.deleteChrono(id)
      commit(DELETE_CHRONO, id)
    } catch (error) {
      return error
    }
  }
}
