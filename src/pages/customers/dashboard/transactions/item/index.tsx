import { IconCircleArrowDown, IconCircleArrowUp } from '@tabler/icons-react'
import { Container, Title, Amount, Date as DateField, Skeleton } from './styles'
import { GetMovementsResponse } from '@/query/customers/get-movements'
import { moneyFormatter } from '@/utils/formatter'
import { memo } from 'react'

export type TransactionType = 'deposits' | 'expenses'

interface ItemProps {
  type?: TransactionType
  status?: 'pending' | 'approved' | 'rejected'
  isLoading?: boolean
  showStatus?: boolean

  data: GetMovementsResponse
}

const ItemComponent = memo(function Item({ isLoading, data }: ItemProps) {
  return (
    <Container>
      {isLoading ? (
        <Skeleton style={{ maxWidth: 300 }} />
      ) : (
        <Title>{data?.description}</Title>
      )}
      <DateField>
        <span>Date</span>
        {isLoading ? (
          <Skeleton style={{ width: 90 }} />
        ) : (
          <strong>
            {new Date(data?.date as string).toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </strong>
        )}
      </DateField>

      <Amount type={data.type}>
        {isLoading ? (
          <Skeleton style={{ width: 100 }} />
        ) : (
          <>
            {data?.type === 'deposits' ? (
              <IconCircleArrowUp />
            ) : (
              <IconCircleArrowDown />
            )}
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
