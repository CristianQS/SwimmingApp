import { ADD_TRAINING_PLAN, MODIFY_TRAINING_PLAN, 
  DELETE_TRAINING_PLAN } from "../types/TrainingPlanTypes"
import { planTrainingClient } from '../../clients/factory'


export default {
  [ADD_TRAINING_PLAN] : ({commit},plantraining) => {
    console.log(plantraining)
    return planTrainingClient.addPlanTraining(plantraining)
  },
  [MODIFY_TRAINING_PLAN] : ({commit}) => {

  },
  [DELETE_TRAINING_PLAN] : ({commit}) => {

  }
}