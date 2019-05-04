import { GET_TRAININGS,GET_TRAINING_BY_ID, ADD_TRAINING, MODIFY_TRAINING,
  CLONE_TRAINING, DELETE_TRAINING } from '../types/TrainingTypes'
import { trainingClient, activityClient } from '../../clients/factory'
import cloneActivities  from '../../helpers/cloneActionsHelpers'

export default {
  [GET_TRAININGS]: async ({ commit }, plantraining) => {
    try {
      commit(GET_TRAININGS,[])
      let response = await trainingClient.getTrainings(plantraining)
      commit(GET_TRAININGS,response.data)
    } catch (error) {
      return error
    }
  },
  [GET_TRAINING_BY_ID]: async ({ commit }, userid) => {
    try {
      let response = await trainingClient.getTrainingById(userid)
      commit(GET_TRAINING_BY_ID,response.data)
    } catch (error) {
      return error
    }
  },
  [ADD_TRAINING]: async({ commit }, params) => {
    try {
      let request = {
        plantraining: params.plantraining_id,
        name: params.name,
        description: params.description,
        timetraining: params.timetraining
      }
      let response = await trainingClient.addTraining(request.plantraining,request)
      commit(ADD_TRAINING,response.data)
    } catch (error) {
      return error
    }
  },
  [CLONE_TRAINING]: async({ commit }, params) => {
    try {
      let request = {
        plantraining: params.plantraining_id,
        name: params.name,
        description: params.description,
        timetraining: params.timetraining
      }
      let clonedTraining = await trainingClient.addTraining(request.plantraining,request)
      let activities = await activityClient.getActivities(request.plantraining,params.id).catch(()=> {
        commit(ADD_TRAINING,clonedTraining.data)
      })

      cloneActivities(params.plantraining_id,clonedTraining.data.id,activities.data) 
      commit(ADD_TRAINING,clonedTraining.data)
    } catch (error) {
      return error
    }
  },
  [MODIFY_TRAINING]: async({ commit },params) => {
    try {
      let response = await trainingClient.modifyTraining(params.training.plantraining_id,
        params.id,params.training)
      commit(MODIFY_TRAINING,response.data)
    } catch (error) {
      return error
    }
  },
  [DELETE_TRAINING]: async ({ commit }, params) => {
    try {
      let response = await trainingClient.deleteTraining(params.plantraining_id, params.id)
      commit(DELETE_TRAINING,params.id)
    } catch (error) {
      return error
    }
  }
}
