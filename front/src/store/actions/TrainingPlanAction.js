import { GET_PLANTRAININGS, ADD_TRAINING_PLAN, MODIFY_TRAINING_PLAN,
  CLONE_TRAINING_PLAN, DELETE_TRAINING_PLAN } from '../types/TrainingPlanTypes'
import { planTrainingClient, trainingClient, activityClient } from '../../clients/factory'

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
      let responses = await Promise.all([
        planTrainingClient.addPlanTraining(post),
        trainingClient.getTrainings(params.id)
      ])
      let trainings = responses[1].data
      let planTrainingCloned = responses[0].data

      trainings.forEach( async (training) =>  {
        let request = {
          plantraining: planTrainingCloned.id,
          name: training.name,
          description: training.description
        }

        let trainingResponses = await Promise.all([
          trainingClient.addTraining(planTrainingCloned.id,request),
          activityClient.getActivities(training.plantraining_id,training.id)
        ])
        let clonedTraining = trainingResponses[0].data
        let activities = trainingResponses[1].data
        
        activities.forEach( async (activity) => {
          let request = {
            id: activity.id,
            plantraining: planTrainingCloned.id,
            training: clonedTraining.id,
            series: activity.series ,
            meters: activity.meters, 
            exercise: activity.exercise, 
            style: activity.style,
            type: activity.type, 
            rhythm: activity.rhythm 
          }
          await activityClient.addActivity(planTrainingCloned.id,clonedTraining.id,request)
        })
      })
      commit(ADD_TRAINING_PLAN,planTrainingCloned)
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
