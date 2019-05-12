import { PLANTRAINING, PLANTRAINING_BY_ID } from '../constants/apiRoutesConstants'

export default function PlanTrainingClient (restClient) {
  function getPlanTrainingByUserId (userid) {
    let params = {
      userid
    }
    return restClient.get(PLANTRAINING(), params)
  }
  function addPlanTraining (params) {
    return restClient.post(PLANTRAINING(), params)
  }
  function modifyPlanTraining (id, plantraining) {
    return restClient.put(PLANTRAINING_BY_ID(id), plantraining)
  }

  function deletePlanTraining (id) {
    return restClient.delete(PLANTRAINING_BY_ID(id))
  }

  return {
    addPlanTraining,
    getPlanTrainingByUserId,
    modifyPlanTraining,
    deletePlanTraining
  }
}
