import { GET_ACTIVITIES, ADD_ACTIVITY,
  MODIFY_ACTIVITY, DELETE_ACTIVITY } from '../types/ActivityTypes'

export default {
  [GET_ACTIVITIES]: (state, activities) => {
    state.activities = activities
  },
  [ADD_ACTIVITY]: (state, activities) => {
    let request = mapActivity(activities)
    state.activities.push(request)
  },
  [MODIFY_ACTIVITY]: (state, activities) => {
    var index = state.activities.findIndex(plan => plan.id === activities.id)
    let request = mapActivity(activities)
    state.activities.splice(index, 1, request)
  },
  [DELETE_ACTIVITY]: (state, id) => {
    state.activities = state.activities.filter(plan => plan.id != id)
  }
}
function mapActivity(activities) {
  return {
    id: activities.id,
    training_id: activities.training,
    plantraining_id: activities.plantraining,
    series: activities.series,
    meters: activities.meters,
    exercise: activities.exercise,
    style: activities.style,
    type: activities.type,
    rhythm: activities.rhythm
  }
}

