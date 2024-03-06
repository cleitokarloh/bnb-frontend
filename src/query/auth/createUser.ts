import { api } from '@/lib/axios'

interface CreateUserRequest {
  name: string
  username: string
  password: string
}
export function createUser(data: CreateUserRequest) {
  return api.post('/users', data)
}
