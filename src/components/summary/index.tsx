import {
  IconCircleArrowDown,
  IconCircleArrowUp,
  IconWallet,
} from '@tabler/icons-react'
import { Skeleton, SummaryCard, SummaryContainer } from './styles'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/hooks/use-auth'
import { getTotalDeposit } from '@/query/customers/get-total-deposit'
import { moneyFormatter } from '@/utils/formatter'
import { getTotalExpenses } from '@/query/customers/get-total-expenses'
import { getBalance } from '@/query/customers/get-balance'

export function Summary() {
  const { auth } = useAuth()

  const { data: deposit, isLoading: isLoadingDeposit } = useQuery({
    queryKey: [`get-total-deposits-${auth.id}`],
    queryFn: getTotalDeposit,
  })

  const { data: expenses, isLoading: isLoadingExpenses } = useQuery({
    queryKey: [`get-total-expenses-${auth.id}`],
    queryFn: getTotalExpenses,
  })

  const { data: balance, isLoading: isLoadingBalance } = useQuery({
    queryKey: [`get-balance-${auth.id}`],
    queryFn: getBalance,
  })

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <IconCircleArrowUp size={32} color="#00b37e" />
        </header>

        {isLoadingDeposit && <Skeleton />}

        {!isLoadingDeposit && (
          <strong>{moneyFormatter.format(deposit?.total ?? 0)}</strong>
        )}
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Expenses</span>
          <IconCircleArrowDown size={32} color="#f75a68" />
        </header>

        {isLoadingExpenses && <Skeleton />}

        {!isLoadingExpenses && (
          <strong>{moneyFormatter.format(expenses?.total ?? 0)}</strong>
        )}
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Balance</span>
          <IconWallet size={32} color="#f3f4f6" />
        </header>

        {isLoadingBalance && <Skeleton />}

        {!isLoadingBalance && (
          <strong>{moneyFormatter.format(balance?.amount ?? 0)}</strong>
        )}
      </SummaryCard>
    </SummaryContainer>
  )
}
