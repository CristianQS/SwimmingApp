const BASE_URL = 'http://localhost:8000'

export const LOGIN = () => `${BASE_URL}/auth/login/`
export const PLANTRAINING = ()=> `${BASE_URL}/plantrainings`
export const PLANTRAINING_BY_ID = (id) => `${BASE_URL}/plantrainings/${id}`
export const TRAINING = (plantraining) => `${BASE_URL}/plantrainings/${plantraining}/trainings`
export const TRAINING_BY_ID = (plantraining,id) => `${BASE_URL}/plantrainings/${plantraining}/trainings/${id}`
export const ACTIVITIES = (plantraining, training) => `${BASE_URL}/plantrainings/${plantraining}/trainings/${training}/activities`
export const ACTIVITIES_BY_ID = (plantraining, training, id) => `${BASE_URL}/plantrainings/${plantraining}/trainings/${training}/activities/${id}`
