import TrainingPlanAction from './actions/TrainingPlanAction'
import TrainingAction from './actions/TrainingAction'
import ActivityAction from './actions/ActivityAction'
import UserActions from './actions/UserActions'
import ChronoActions from './actions/ChronoActions'
import PhaseAction from './actions/PhaseAction'

export default {
  ...TrainingPlanAction,
  ...TrainingAction,
  ...ActivityAction,
  ...UserActions,
  ...ChronoActions,
  ...PhaseAction
}
