import { GET_PLANTRAININGS, ADD_TRAINING_PLAN, MODIFY_TRAINING_PLAN,
  DELETE_TRAINING_PLAN } from '../types/TrainingPlanTypes'
import { planTrainingClient } from '../../clients/factory'

export default {
  [GET_PLANTRAININGS]: async ({ commit }, userid) => {
    try {
      let response = await planTrainingClient.getPlanTrainingByUserId(userid)
      commit(GET_PLANTRAININGS,response.data)
    } catch (error) {
      return error
    }
  },
  [ADD_TRAINING_PLAN]: async({ commit }, plantraining) => {
    try {
      let response = await planTrainingClient.addPlanTraining(plantraining)
      commit(ADD_TRAINING_PLAN,response.data)
    } catch (error) {
      return error
    }
  },
  [MODIFY_TRAINING_PLAN]: async({ commit },params) => {
    try {
      let response = await planTrainingClient.modifyPlanTraining(params.id,params.plantraining)
      commit(MODIFY_TRAINING_PLAN,response.data)
    } catch (error) {
      return error
    }
  },
  [DELETE_TRAINING_PLAN]: async ({ commit }, id) => {
    try {
      let response = await planTrainingClient.deletePlanTraining(id)
      commit(DELETE_TRAINING_PLAN,id)
    } catch (error) {
      return error
    }
  }
}
