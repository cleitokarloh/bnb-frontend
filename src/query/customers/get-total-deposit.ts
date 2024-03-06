import { api } from '@/lib/axios'

interface TotalDepositResponse {
  total: number
}

export const getTotalDeposit = async (): Promise<TotalDepositResponse> => {
  const { data } = await api.get<TotalDepositResponse>('/deposits/total')
  return data
}
