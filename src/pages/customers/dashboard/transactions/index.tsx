import {
  Container,
  Title,
  Content,
  Items,
  TitleWrapper,
  EmptyList,
} from './styles'

import { Item } from './item'
import { ButtonAdd } from './button-add'
import { useAuth } from '@/hooks/use-auth'
import { useQuery } from '@tanstack/react-query'
import {
  getMovements,
  GetMovementsResponse,
} from '@/query/customers/get-movements'
import { Menu } from '@/components/menu'

export function Transactions() {
  const { auth } = useAuth()
  const { data: movements, isLoading } = useQuery({
    queryKey: [`get-movements-${auth.id}`],
    queryFn: getMovements,
  })

  return (
    <Container>
      <Menu />
      <TitleWrapper>
        <Title>Transactions</Title>
        <ButtonAdd />
      </TitleWrapper>

      <Content>
        <hr />
        <Items>
          {!isLoading && movements?.length === 0 && (
            <EmptyList>
              No transactions were found. To start, create new a{' '}
              <a href="javascript:void()">deposit</a>, and after admin approval,
              you can add your expenses.
            </EmptyList>
          )}

          {isLoading &&
            Array.from({ length: 10 }).map((_, i) => (
              <Item key={i} isLoading data={{} as GetMovementsResponse} />
            ))}

          {!isLoading &&
            movements?.map((movement) => (
              <Item key={movement.id} type={movement.type} data={movement} />
            ))}
        </Items>
      </Content>
    </Container>
  )
}
