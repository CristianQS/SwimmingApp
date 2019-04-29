import { ADD_TRAINING_PLAN, MODIFY_TRAINING_PLAN, 
  DELETE_TRAINING_PLAN } from "../types/TrainingPlanTypes"
import PlanTrainingClient from "../../clients/PlanTrainingClient"


export default {
  [ADD_TRAINING_PLAN] : async({commit},plantraining) => {
    return await PlanTrainingClient.addPlanTraining(plantraining)
  },
  [MODIFY_TRAINING_PLAN] : ({commit}) => {

  },
  [DELETE_TRAINING_PLAN] : ({commit}) => {

  }
}