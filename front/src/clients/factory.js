import { restClient } from './restClient'
import UserClient from './UserClient'
import PlanTrainingClient from './PlanTrainingClient'
import TrainingClient from './TrainingClient'
import ActivityClient from './ActivityClient'
import ChronometerClient from './ChronometerClient'

export const userClient = UserClient(restClient)
export const planTrainingClient = PlanTrainingClient(restClient)
export const trainingClient = TrainingClient(restClient)
export const activityClient = ActivityClient(restClient)
export const chronometerClient = ChronometerClient(restClient)
