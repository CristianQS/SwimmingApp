import { restClient } from './restClient'
import UserClient from './UserClient'

export const userClient = UserClient(restClient)