import { ACTIVITIES, ACTIVITIES_BY_ID } from '../constants/apiRoutesConstants'

export default function ActivityClient (restClient) {
  function getActivities (plantraining, training) {
    return restClient.get(ACTIVITIES(plantraining, training))
  }
  function getActivityById (plantraining, training, id) {
    return restClient.get(ACTIVITIES_BY_ID(plantraining, training, id))
  }
  function addActivity (plantraining, training, activity) {
    return restClient.post(ACTIVITIES(plantraining, training), activity)
  }
  function modifyActivity (plantraining, training, id, activity) {
    return restClient.put(ACTIVITIES_BY_ID(plantraining, training, id), activity)
  }
  function deleteActivity (plantraining, training, id) {
    return restClient.delete(ACTIVITIES_BY_ID(plantraining, training, id))
  }

  return {
    getActivities,
    getActivityById,
    addActivity,
    modifyActivity,
    deleteActivity
  }
}
