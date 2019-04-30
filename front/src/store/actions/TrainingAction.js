import { GET_TRAININGS,GET_TRAINING_BY_ID, ADD_TRAINING, MODIFY_TRAINING,
  DELETE_TRAINING } from '../types/TrainingTypes'
import { trainingClient } from '../../clients/factory'

export default {
  [GET_TRAININGS]: async ({ commit }, plantraining) => {
    try {
      let response = await trainingClient.getTrainings(plantraining)
      commit(GET_TRAININGS,response.data)
    } catch (error) {
      return error
    }
  },
  [GET_TRAINING_BY_ID]: async ({ commit }, userid) => {
    try {
      let response = await trainingClient.getTrainingById(userid)
      commit(GET_TRAINING_BY_ID,response.data)
    } catch (error) {
      return error
    }
  },
  [ADD_TRAINING]: async({ commit }, params) => {
    // try {
      let response = await trainingClient.addTraining(params.idplan,params.training)
      commit(ADD_TRAINING,response.data)
    // } catch (error) {
    //   return error
    // }
  },
  [MODIFY_TRAINING]: async({ commit },params) => {
    try {
      let response = await trainingClient.modifyTraining(params.id,params.plantraining)
      commit(MODIFY_TRAINING,response.data)
    } catch (error) {
      return error
    }
  },
  [DELETE_TRAINING]: async ({ commit }, id) => {
    try {
      let response = await trainingClient.deleteTraining(id)
      commit(DELETE_TRAINING,id)
    } catch (error) {
      return error
    }
  }
}
