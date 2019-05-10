import TrainingPlanAction from './mutations/TrainingPlanMutation'
import TrainingAction from './mutations/TrainingMutation'
import ActivityAction from './mutations/ActivityMutation'
import UserMutations from './mutations/UserMutations'

export default {
  ...TrainingPlanAction,
  ...TrainingAction,
  ...ActivityAction,
  ...UserMutations
}
