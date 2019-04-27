import TrainingPlanAction from './actions/TrainingPlanAction'
import TrainingAction from './actions/TrainingAction'
import ActivityAction from './actions/ActivityAction'

export default {
  ...TrainingPlanAction,
  ...TrainingAction,
  ...ActivityAction
}