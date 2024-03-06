import { api } from '@/lib/axios'

interface CreateExpenseRequest {
  amount: number
  date: string
  description: string
}
export function createExpense(data: CreateExpenseRequest) {
  return api.post('/expenses', data)
}
