import TrainingPlanAction from './mutations/TrainingPlanMutation'
import TrainingAction from './mutations/TrainingMutation'
import ActivityAction from './mutations/ActivityMutation'
import UserMutations from './mutations/UserMutations'
import ChronoMutation from './mutations/ChronoMutation'

export default {
  ...TrainingPlanAction,
  ...TrainingAction,
  ...ActivityAction,
  ...UserMutations,
  ...ChronoMutation
}
