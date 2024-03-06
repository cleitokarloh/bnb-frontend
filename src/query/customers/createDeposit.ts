import { api } from '@/lib/axios'

interface CreateDepositRequest {
  amount: string
  description: string
  image: File
}
export function createDeposit(data: CreateDepositRequest) {
  const formData = new FormData()
  formData.append('amount', data.amount.replace(/[^0-9.]/g, ''))
  formData.append('description', data.description)
  formData.append('image', data.image)

  return api.post('/deposits', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
