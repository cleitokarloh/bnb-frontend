import {
  Container,
  Title,
  Content,
  Items,
  TitleWrapper,
  EmptyList,
  Filter,
  FilterItem,
  FilterWrapper,
} from './styles'

import { Item } from './item'
import { ButtonAdd } from './button-add'
import { useAuth } from '@/hooks/use-auth'
import { useQuery } from '@tanstack/react-query'

import { Menu } from '@/components/menu'
import {
  DepositStatus,
  GetDepositsResponse,
  getDeposits,
} from '@/query/customers/get-deposits'
import { useCallback, useMemo, useState } from 'react'

interface DepositStatusProps {
  label: DepositStatus
  value: string
}

export function Transactions() {
  const { auth } = useAuth()
  const [activeFilter, setActiveFilter] = useState<DepositStatus>('pending')

  const { data: deposits, isLoading } = useQuery({
    queryKey: [`get-checks-${auth.id}`],
    queryFn: getDeposits,
  })

  const depositsList = useMemo(() => {
    if (!deposits) return []
    return deposits.filter((deposit) => deposit.status === activeFilter)
  }, [deposits, activeFilter])

  const filters: DepositStatusProps[] = [
    {
      label: 'pending',
      value: 'Pending',
    },
    {
      label: 'approved',
      value: 'Accepted',
    },
    {
      label: 'rejected',
      value: 'Rejected',
    },
  ]

  const handleChangeFilter = useCallback((filter: DepositStatus) => {
    setActiveFilter(filter)
  }, [])

  return (
    <Container>
      <Menu />
      <TitleWrapper>
        <Title>Deposits</Title>
        <ButtonAdd />
      </TitleWrapper>

      <Content>
        <Filter>
          <FilterWrapper>
            {filters.map((filter) => (
              <FilterItem
                key={filter.label}
                status={filter.label === activeFilter ? 'active' : 'inactive'}
                onClick={() => handleChangeFilter(filter.label)}
              >
                {filter.value}
              </FilterItem>
            ))}
          </FilterWrapper>
        </Filter>
        <hr />
        <Items>
          {!isLoading && depositsList?.length === 0 && (
            <EmptyList>No {activeFilter} deposits were found.</EmptyList>
          )}

          {isLoading &&
            Array.from({ length: 10 }).map((_, i) => (
              <Item key={i} isLoading data={{} as GetDepositsResponse} />
            ))}

          {!isLoading &&
            depositsList?.map((deposit) => (
              <Item key={deposit.id} data={deposit} />
            ))}
        </Items>
      </Content>
    </Container>
  )
}
