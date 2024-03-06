import { IconCircleArrowUp } from '@tabler/icons-react'
import { Container, Title, Amount, Date as DateField, Skeleton } from './styles'
import { dateFormatter, moneyFormatter } from '@/utils/formatter'
import { GetDepositsResponse } from '@/query/customers/get-deposits'
import { memo } from 'react'

export type TransactionType = 'deposit' | 'expense'

interface ItemProps {
  type?: TransactionType
  status?: 'pending' | 'approved' | 'rejected'
  isLoading?: boolean
  showStatus?: boolean

  data: GetDepositsResponse
}

const ItemComponent = memo(function Item({ isLoading, data }: ItemProps) {
  return (
    <Container>
      {isLoading ? (
        <Skeleton style={{ maxWidth: 290 }} />
      ) : (
        <Title>{data?.description}</Title>
      )}
      <DateField>
        <span>Date</span>
        {isLoading ? (
          <Skeleton style={{ width: 150 }} />
        ) : (
          <strong>
            {data?.created_at
              ? dateFormatter.format(Date.parse(data.created_at))
              : ''}
          </strong>
        )}
      </DateField>

      <Amount type={'deposit'}>
        {isLoading ? (
          <Skeleton style={{ width: 100 }} />
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
