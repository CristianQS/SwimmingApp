import { GET_PLANTRAININGS, ADD_TRAINING_PLAN, MODIFY_TRAINING_PLAN,
  DELETE_TRAINING_PLAN } from '../types/TrainingPlanTypes'

export default {
  [GET_PLANTRAININGS]: (state, plantrainings) => {
    state.plantrainings = plantrainings
  },
  [ADD_TRAINING_PLAN]: (state, plantraining) => {
    state.plantrainings.push(plantraining)
  },
  [MODIFY_TRAINING_PLAN]: (state,plantraining) => {
    var index = state.plantrainings.findIndex(plan => plan.id === plantraining.id)
    state.plantrainings.splice(index,1,plantraining)
  },
  [DELETE_TRAINING_PLAN]: (state, id) => {
    state.plantrainings = state.plantrainings.filter(plan => plan.id != id)
  }
}
