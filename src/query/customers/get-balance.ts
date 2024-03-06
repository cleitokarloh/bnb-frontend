import { api } from '@/lib/axios'

interface getBalanceResponse {
  amount: number
}

export const getBalance = async (): Promise<getBalanceResponse> => {
  const { data } = await api.get<getBalanceResponse>('/balance')
  return data
}
