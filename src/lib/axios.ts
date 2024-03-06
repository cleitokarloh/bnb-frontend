import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,

  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@bnb-bank:token')

  if (token) {
    const parsedToken = JSON.parse(token)
    config.headers.Authorization = `Bearer ${parsedToken}`
  }

  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('@bnb-bank:token')
      window.location.href = '/sign-in'
    }
    return Promise.reject(error)
  },
)
