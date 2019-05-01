import { GET_PLANTRAININGS, ADD_TRAINING_PLAN, MODIFY_TRAINING_PLAN,
  DELETE_TRAINING_PLAN } from '../types/TrainingPlanTypes'
import { planTrainingClient } from '../../clients/factory'

export default {
  [GET_PLANTRAININGS]: async ({ commit }, params) => {
    try {
      let response = await planTrainingClient.getPlanTrainingByUserId(params.userid)
      commit(GET_PLANTRAININGS,response.data)
    } catch (error) {
      return error
    }
  },
  [ADD_TRAINING_PLAN]: async({ commit }, params) => {
    try {
      let post = {
        name: params.name,
        description: params.description,
        user: [1,2]
      }
      let response = await planTrainingClient.addPlanTraining(post)
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
  [DELETE_TRAINING_PLAN]: async ({ commit }, params) => {
    try {
      let response = await planTrainingClient.deletePlanTraining(params.id)
      commit(DELETE_TRAINING_PLAN,params.id)
    } catch (error) {
      return error
    }
  }
}
