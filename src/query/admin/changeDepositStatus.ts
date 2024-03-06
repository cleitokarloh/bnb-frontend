import { api } from '@/lib/axios'

interface ChangeDepositStatusRequest {
  status: 'approved' | 'rejected'
  id: number
}
export function changeDepositStatus({
  id,
  status,
}: ChangeDepositStatusRequest) {
  return api.patch(`/deposits/${id}`, {
    status,
  })
}
