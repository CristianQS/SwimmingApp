import { PLANTRAINING,PLANTRAINING_BY_ID } from '../constants/apiRoutesConstants'

export default function PlanTrainingClient (restClient) {
  function getPlanTrainingByUserId(userid){
    console.log(userid)
    return restClient.get(PLANTRAINING(),userid)
  }
  
  function addPlanTraining (plantraining) {
    return restClient.post(PLANTRAINING(),plantraining)
  }

  return {
    addPlanTraining,
    getPlanTrainingByUserId
  }
}