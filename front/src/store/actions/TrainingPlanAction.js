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
  [ADD_TRAINING_PLAN]: ({ commit }, plantraining) => {
    return planTrainingClient.addPlanTraining(plantraining)
  },
  [MODIFY_TRAINING_PLAN]: ({ commit }) => {
    return planTrainingClient
  },
  [DELETE_TRAINING_PLAN]: ({ commit }, id) => {
    return planTrainingClient.deletePlanTraining(id)
  }
}
