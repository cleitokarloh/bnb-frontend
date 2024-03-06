import { api } from '@/lib/axios'

export interface GetMovementsResponse {
  id: number
  description: string
  amount: number
  date: string
  type: 'deposits' | 'expenses'
}

export const getMovements = async (): Promise<GetMovementsResponse[]> => {
  const { data } = await api.get<GetMovementsResponse[]>('/movements')
  return data
}
