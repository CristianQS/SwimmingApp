import { restClient } from './restClient'
import UserClient from './UserClient'
import PlanTrainingClient from './PlanTrainingClient'
import TrainingClient from './TrainingClient'


export const userClient = UserClient(restClient)
export const planTrainingClient = PlanTrainingClient(restClient)
export const trainingClient = TrainingClient(restClient)
