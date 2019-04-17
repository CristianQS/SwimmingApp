import TrainingPlanAction from './mutations/TrainingPlanMutation'
import TrainingAction from './mutations/TrainingMutation'
import ActivityAction from './mutations/ActivityMutation'

export default {
  ...TrainingPlanAction,
  ...TrainingAction,
  ...ActivityAction
}