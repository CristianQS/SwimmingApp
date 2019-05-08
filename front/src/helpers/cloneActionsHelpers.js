import { trainingClient, activityClient } from '../clients/factory'

export default function cloneActivities (clonedPlanTrainingId,clonedTrainingId,activities) {
  activities.forEach( async (activity) => {
    let request = {
      id: activity.id,
      plantraining: clonedPlanTrainingId,
      training: clonedTrainingId,
      series: activity.series ,
      meters: activity.meters, 
      exercise: activity.exercise, 
      style: activity.style,
      type: activity.type, 
      rhythm: activity.rhythm 
    }
    await activityClient.addActivity(clonedPlanTrainingId,clonedTrainingId,request)
  })
}


