import { api } from '@/lib/axios'

export type DepositStatus = 'pending' | 'approved' | 'rejected'

export interface GetDepositsResponse {
  id: number
  description: string
  amount: number
  created_at: string
  status: DepositStatus
}

export const getDeposits = async (): Promise<GetDepositsResponse[]> => {
  const { data } = await api.get<GetDepositsResponse[]>('/deposits/customer')
  return data
}
