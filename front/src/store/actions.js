import TrainingPlanAction from './actions/TrainingPlanAction'
import TrainingAction from './actions/TrainingAction'
import ActivityAction from './actions/ActivityAction'
import UserActions from './actions/UserActions'

export default {
  ...TrainingPlanAction,
  ...TrainingAction,
  ...ActivityAction,
  ...UserActions
}