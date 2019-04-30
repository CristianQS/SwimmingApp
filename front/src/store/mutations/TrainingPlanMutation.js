import { GET_PLANTRAININGS, ADD_TRAINING_PLAN, MODIFY_TRAINING_PLAN,
  DELETE_TRAINING_PLAN } from '../types/TrainingPlanTypes'

export default {
  [GET_PLANTRAININGS]: (state, plantrainings) => {
    state.plantrainings = plantrainings
  },
  [ADD_TRAINING_PLAN]: (state, plantraining) => {
    return planTrainingClient.addPlanTraining(plantraining)
  },
  [MODIFY_TRAINING_PLAN]: (state) => {
    return planTrainingClient
  },
  [DELETE_TRAINING_PLAN]: (state, id) => {
    return planTrainingClient.deletePlanTraining(id)
  }
}
