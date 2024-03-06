import { IconCircleArrowUp } from '@tabler/icons-react'
import {
  Container,
  Title,
  Badge,
  Amount,
  Date as DateField,
  Skeleton,
} from './styles'
import { dateFormatter, moneyFormatter } from '@/utils/formatter'
import { GetPendingDeposits } from '@/query/admin/get-pending-deposits'
import { memo } from 'react'

export type TransactionType = 'deposit' | 'expense'

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: TransactionType
  status?: 'pending' | 'approved' | 'rejected'
  isLoading?: boolean
  showStatus?: boolean

  data: GetPendingDeposits
}
const ItemComponent = memo(function Item({
  type,
  status,
  isLoading,
  showStatus,
  data,
  ...rest
}: ItemProps) {
  const statusLabel = {
    pending: 'pending',
    approved: 'approved',
    rejected: 'rejected',
  }
  return (
    <Container {...rest}>
      {isLoading ? <Skeleton /> : <Title>{data?.description}</Title>}
      <DateField>
        <span>Date</span>
        {isLoading ? (
          <Skeleton />
        ) : (
          <strong>
            {data?.created_at
              ? dateFormatter.format(Date.parse(data.created_at))
              : ''}
          </strong>
        )}
      </DateField>
      {showStatus && isLoading && <Skeleton />}
      {showStatus && type === 'expense' && status && (
        <Badge status={status}>{statusLabel[status]}</Badge>
      )}
      <Amount type={'deposit'}>
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <IconCircleArrowUp />

            <strong>{moneyFormatter.format(data.amount)}</strong>
          </>
        )}
      </Amount>
    </Container>
  )
})

export function Item(props: ItemProps) {
  return <ItemComponent {...props} />
}
