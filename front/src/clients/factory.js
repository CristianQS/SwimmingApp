import { restClient } from './restClient'
import UserClient from './UserClient'
import PlanTrainingClient from './PlanTrainingClient'

export const userClient = UserClient(restClient)
export const planTrainingClient = PlanTrainingClient(restClient)