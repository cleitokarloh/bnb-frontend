import {
  Container,
  Title,
  Content,
  Items,
  TitleWrapper,
  EmptyList,
} from './styles'

import { Item } from './item'
import { useAuth } from '@/hooks/use-auth'
import { useQuery } from '@tanstack/react-query'

import {
  getPendingDeposits,
  GetPendingDeposits,
} from '@/query/admin/get-pending-deposits'
import * as Dialog from '@radix-ui/react-dialog'
import { DepositDetails } from '@/components/deposit-details'
import { useCallback, useState } from 'react'

export function Transactions() {
  const [deposit, setDeposit] = useState<GetPendingDeposits | undefined>(
    undefined,
  )
  const { auth } = useAuth()

  const { data: deposits, isLoading } = useQuery({
    queryKey: [`get-deposits-pending-${auth.id}`],
    queryFn: getPendingDeposits,
  })

  const handleToggleDepositDialog = useCallback(
    (currentDeposit: GetPendingDeposits | undefined) => {
      if (currentDeposit) {
        setDeposit(currentDeposit)
      } else {
        setDeposit(undefined)
      }
    },
    [],
  )

  return (
    <Container>
      <TitleWrapper>
        <Title>Pending Deposits</Title>
      </TitleWrapper>

      <Content>
        <hr />
        <Items>
          {!isLoading && deposits?.length === 0 && (
            <EmptyList>No pending check to evaluation.</EmptyList>
          )}

          {isLoading &&
            Array.from({ length: 10 }).map((_, i) => (
              <Item key={i} isLoading data={{} as GetPendingDeposits} />
            ))}

          {!isLoading &&
            deposits?.map((deposit) => (
              <Item
                key={deposit.id}
                data={deposit}
                onClick={() => handleToggleDepositDialog(deposit)}
              />
            ))}
        </Items>
      </Content>
      <Dialog.Root open={!!deposit?.id}>
        <Dialog.Trigger asChild></Dialog.Trigger>
        <DepositDetails
          onRequestClose={() => handleToggleDepositDialog(undefined)}
          deposit={deposit as GetPendingDeposits}
        />
      </Dialog.Root>
    </Container>
  )
}
