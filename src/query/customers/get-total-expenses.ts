import { api } from '@/lib/axios'

interface TotalExpensesResponse {
  total: number
}

export const getTotalExpenses = async (): Promise<TotalExpensesResponse> => {
  const { data } = await api.get<TotalExpensesResponse>('/expenses/total')
  return data
}
