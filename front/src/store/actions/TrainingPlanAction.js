import { GET_PLANTRAININGS, ADD_TRAINING_PLAN, MODIFY_TRAINING_PLAN,
  CLONE_TRAINING_PLAN, DELETE_TRAINING_PLAN } from '../types/TrainingPlanTypes'
import { planTrainingClient, trainingClient, activityClient } from '../../clients/factory'
import cloneActivities  from '../../helpers/cloneActionsHelpers'

export default {
  [GET_PLANTRAININGS]: async ({ commit }, params) => {
    try {
      let response = await planTrainingClient.getPlanTrainingByUserId(params.userid)
      commit(GET_PLANTRAININGS,response.data)
    } catch (error) {
      return error
    }
  },
  [ADD_TRAINING_PLAN]: async({ commit }, params) => {
    try {
      let post = {
        name: params.name,
        description: params.description,
        user: [1,2]
      }
      let response = await planTrainingClient.addPlanTraining(post)
      commit(ADD_TRAINING_PLAN,response.data)
    } catch (error) {
      return error
    }
  },
  [CLONE_TRAINING_PLAN]: async({ commit }, params) => {
    try {
      let post = {
        name: params.name,
        description: params.description,
        user: [1,2]
      }

      let planTrainingCloned = await planTrainingClient.addPlanTraining(post)
      let trainings = await trainingClient.getTrainings(params.id).catch(()=> {
        commit(ADD_TRAINING_PLAN,planTrainingCloned.data)
      })  

      trainings.data.forEach( async (training) =>  {
        let request = {
          plantraining: planTrainingCloned.data.id,
          name: training.name,
          description: training.description,
          timetraining: training.timetraining
        }

        let clonedTraining = await trainingClient.addTraining(planTrainingCloned.data.id,request)
        let activities = await activityClient.getActivities(training.plantraining_id,training.id).catch((error) => {
          return error
        })
        if(activities.data !== undefined){
          cloneActivities(planTrainingCloned.data.id,clonedTraining.data.id, activities.data)
        }
      })
      commit(ADD_TRAINING_PLAN,planTrainingCloned.data)
    } catch (error) {
      return error
    }
  },
  [MODIFY_TRAINING_PLAN]: async({ commit },params) => {
    try {
      let response = await planTrainingClient.modifyPlanTraining(params.id,params.plantraining)
      commit(MODIFY_TRAINING_PLAN,response.data)
    } catch (error) {
      return error
    }
  },
  [DELETE_TRAINING_PLAN]: async ({ commit }, params) => {
    try {
      let response = await planTrainingClient.deletePlanTraining(params.id)
      commit(DELETE_TRAINING_PLAN,params.id)
    } catch (error) {
      return error
    }
  }
}
