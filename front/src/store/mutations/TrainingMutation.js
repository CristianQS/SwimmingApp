import { GET_TRAININGS, GET_TRAINING_BY_ID,
  ADD_TRAINING, MODIFY_TRAINING,
  DELETE_TRAINING } from '../types/TrainingTypes'

export default {
  [GET_TRAININGS]: (state, trainings) => {
    state.trainings = trainings
  },
  [ADD_TRAINING]: (state, training) => {
    let request = {
      id: training.id,
      plantraining_id: training.plantraining,
      name: training.name,
      description: training.description,
      timetraining: training.timetraining
    }
    state.trainings.push(request)
  },
  [MODIFY_TRAINING]: (state, training) => {
    var index = state.trainings.findIndex(plan => plan.id === training.id)
    state.trainings.splice(index, 1, training)
  },
  [DELETE_TRAINING]: (state, id) => {
    state.trainings = state.trainings.filter(plan => plan.id != id)
  }
}
