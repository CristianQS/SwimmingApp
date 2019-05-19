// const BASE_URL = 'http://localhost:8000'
const BASE_URL = 'http://ec2-52-212-226-173.eu-west-1.compute.amazonaws.com:8000'

export const LOGIN = () => `${BASE_URL}/auth/login/`
export const AUTHENTICATE = () => `${BASE_URL}/authenticate/`
export const SIGN_UP = () => `${BASE_URL}/signup/`
export const USERS = () => `${BASE_URL}/users`
export const USERS_BY_ID = (id) => `${BASE_URL}/users/${id}`
export const USERS_BY_IDCLUB = (id) => `${BASE_URL}/users/clubs/${id}`
export const PLANTRAINING = () => `${BASE_URL}/plantrainings`
export const PLANTRAINING_BY_ID = (id) => `${BASE_URL}/plantrainings/${id}`
export const TRAINING = (plantraining) => `${BASE_URL}/plantrainings/${plantraining}/trainings`
export const TRAINING_BY_ID = (plantraining, id) => `${BASE_URL}/plantrainings/${plantraining}/trainings/${id}`
export const ACTIVITIES = (plantraining, training) => `${BASE_URL}/plantrainings/${plantraining}/trainings/${training}/activities`
export const ACTIVITIES_BY_ID = (plantraining, training, id) => `${BASE_URL}/plantrainings/${plantraining}/trainings/${training}/activities/${id}`
export const CHRONOS = () => `${BASE_URL}/chronos`
export const CHRONOS_BY_ID = (id) => `${BASE_URL}/chronos/${id}/`
export const PHASES_BY_CHRONO_ID = (id) => `${BASE_URL}/chronos/${id}/phases/`
