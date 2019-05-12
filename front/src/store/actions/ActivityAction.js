import { GET_ACTIVITIES, GET_ACTIVITY_BY_ID, ADD_ACTIVITY, MODIFY_ACTIVITY,
  DELETE_ACTIVITY } from '../types/ActivityTypes'
import { activityClient } from '../../clients/factory'

export default {
  [GET_ACTIVITIES]: async ({ commit }, params) => {
    try {
      commit(GET_ACTIVITIES, [])
      let response = await activityClient.getActivities(params.plantraining_id, params.training_id)
      commit(GET_ACTIVITIES, response.data)
    } catch (error) {
      return error
    }
  },
  [GET_ACTIVITY_BY_ID]: async ({ commit }, params) => {
    try {
      let response = await activityClient.getActivityById(params.plantraining, params.training, params.id)
      commit(GET_ACTIVITY_BY_ID, response.data)
    } catch (error) {
      return error
    }
  },
  [ADD_ACTIVITY]: async ({ commit }, params) => {
    try {
      let request = {
        id: params.id,
        plantraining: params.plantraining_id,
        training: params.training_id,
        series: params.series,
        meters: params.meters,
        exercise: params.exercise,
        style: params.style,
        type: params.type,
        rhythm: params.rhythm
      }
      let response = await activityClient.addActivity(request.plantraining,
        request.training, request)
      commit(ADD_ACTIVITY, response.data)
    } catch (error) {
      return error
    }
  },
  [MODIFY_ACTIVITY]: async ({ commit }, params) => {
    try {
      let response = await activityClient.modifyActivity(params.plantraining_id,
        params.training_id,
        params.id, params)
      commit(MODIFY_ACTIVITY, response.data)
    } catch (error) {
      return error
    }
  },
  [DELETE_ACTIVITY]: async ({ commit }, params) => {
    try {
      let response = await activityClient.deleteActivity(params.plantraining_id, params.training_id, params.id)
      commit(DELETE_ACTIVITY, params.id)
    } catch (error) {
      return error
    }
  }
}
