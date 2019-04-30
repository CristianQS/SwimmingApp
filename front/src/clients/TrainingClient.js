import { TRAINING,TRAINING_BY_ID } from '../constants/apiRoutesConstants'

export default function PlanTrainingClient (restClient) {
  function getTrainings(plantraining){
    return restClient.get(TRAINING(plantraining))
  }
  function getTrainingById(plantraining,id){
    return restClient.get(TRAINING_BY_ID(plantraining,id))
  }
  function addTraining (plantraining,training) {
    return restClient.post(TRAINING(plantraining),training)
  }
  function modifyTraining (plantraining,id,training) {
    return restClient.put(TRAINING_BY_ID(plantraining,id),training)
  }

  function deleteTraining (plantraining,id) {
    return restClient.delete(TRAINING_BY_ID(plantraining,id))
  }

  return {
    addTraining,
    getTrainings,
    getTrainingById,
    modifyTraining,
    deleteTraining
  }
}