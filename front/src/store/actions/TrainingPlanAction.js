import { GET_PLANTRAININGS, ADD_TRAINING_PLAN, MODIFY_TRAINING_PLAN, 
  DELETE_TRAINING_PLAN } from "../types/TrainingPlanTypes"
import { planTrainingClient } from '../../clients/factory'


export default {
  [GET_PLANTRAININGS] : ({commit},userid) => {
    return planTrainingClient.getPlanTrainingByUserId(userid)
  },
  [ADD_TRAINING_PLAN] : ({commit},plantraining) => {
    return planTrainingClient.addPlanTraining(plantraining)
  },
  [MODIFY_TRAINING_PLAN] : ({commit}) => {

  },
  [DELETE_TRAINING_PLAN] : ({commit},id) => {
    return planTrainingClient.deletePlanTraining(id)
  }
}