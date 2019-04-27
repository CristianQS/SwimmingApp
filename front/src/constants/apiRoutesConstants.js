const BASE_URL = 'http://localhost:8000'

export const LOGIN = () => `${BASE_URL}/auth/login/`
export const PLANTRAINING = ()=> `${BASE_URL}/plantrainings`
export const PLANTRAINING_BY_ID = (id) => `${BASE_URL}/plantrainings/${id}`
