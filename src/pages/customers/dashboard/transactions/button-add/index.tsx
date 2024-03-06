import {
  IconCircleArrowDown,
  IconCircleArrowUp,
  IconPlus,
} from '@tabler/icons-react'
import {
  Container,
  DropdownMenuRoot,
  DropdownMenuButton,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
} from './styles'
import { useTheme } from 'styled-components'
import { NewExpense } from '@/components/new-expense'
import * as Dialog from '@radix-ui/react-dialog'
import { useCallback, useState } from 'react'
import { NewDeposit } from '@/components/new-deposit'

export function ButtonAdd() {
  const theme = useTheme()

  const [hasOpenDialogExpense, setHasOpenDialogExpense] = useState(false)
  const [hasOpenDialogDeposit, setHasOpenDialogDeposit] = useState(false)

  const handleToggleExpenseDialog = useCallback(() => {
    setHasOpenDialogExpense((prev) => !prev)
  }, [])

  const handleToggleDepositDialog = useCallback(() => {
    setHasOpenDialogDeposit((prev) => !prev)
  }, [])

  return (
    <Container>
      <DropdownMenuRoot>
        <DropdownMenuButton asChild>
          <div>
            <IconPlus size={28} color={theme.white} />
          </div>
        </DropdownMenuButton>

        <DropdownMenuPortal>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleToggleDepositDialog}>
              <IconCircleArrowUp size={20} color={theme['gray-900']} />
              <div>
                <strong>Incomes</strong>
                <span>Add a new check</span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={handleToggleExpenseDialog}>
              <IconCircleArrowDown size={20} color={theme['gray-900']} />
              <div>
                <strong>Expenses</strong>
                <span>Add a new expense</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenuRoot>

      <Dialog.Root open={hasOpenDialogDeposit}>
        <Dialog.Trigger asChild></Dialog.Trigger>
        <NewDeposit onRequestClose={handleToggleDepositDialog} />
      </Dialog.Root>

      <Dialog.Root open={hasOpenDialogExpense}>
        <Dialog.Trigger asChild></Dialog.Trigger>
        <NewExpense onRequestClose={handleToggleExpenseDialog} />
      </Dialog.Root>
    </Container>
  )
}
