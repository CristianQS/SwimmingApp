import { PLANTRAINING } from '../constants/apiRoutesConstants'

export default function PlanTrainingClient (restClient) {
  function getPlanTrainingByUserId(){

  }
  
  function addPlanTraining (plantraining) {
    return restClient.post(PLANTRAINING(),plantraining)
  }

  return {
    addPlanTraining
  }
}