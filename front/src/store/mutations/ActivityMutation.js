import { GET_ACTIVITIES, ADD_ACTIVITY, 
  MODIFY_ACTIVITY,DELETE_ACTIVITY } from '../types/ActivityTypes'

export default {
  [GET_ACTIVITIES]: (state, activities) => {
    state.activities = activities
  },
  [ADD_ACTIVITY]: (state, activities) => {
    let request = {
      id: training.id,
      plantraining_id: training.plantraining,
      name: training.name,
      description: training.description
    }
    state.activities.push(request)
  },
  [MODIFY_ACTIVITY]: (state,activities) => {
    var index = state.activities.findIndex(plan => plan.id === training.id)
    state.activities.splice(index,1,activities)
  },
  [DELETE_ACTIVITY]: (state, id) => {
    state.activities = state.activities.filter(plan => plan.id != id)
  }
}
