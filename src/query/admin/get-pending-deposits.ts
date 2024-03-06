import { api } from '@/lib/axios'

export type DepositStatus = 'pending' | 'accepted' | 'rejected'

export interface GetPendingDeposits {
  id: number
  description: string
  amount: number
  created_at: string
  status: DepositStatus
  image: {
    file: string
    size: number
  }
  user: {
    id: number
    name: string
    username: string
    role: string
    created_at: string
    updated_at: string
  }
}

export const getPendingDeposits = async (): Promise<GetPendingDeposits[]> => {
  const { data } = await api.get<GetPendingDeposits[]>('/deposits/pending')
  return data
}
