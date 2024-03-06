import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'

import { CloseButton, Content, Overlay } from './styles'
import { IconX } from '@tabler/icons-react'
import { Input } from '../input'
import { NumericFormat } from '../numeric-format'
import { Button } from '../button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useCallback } from 'react'
import { createExpense } from '@/query/customers/createExpense'

import { useAuth } from '@/hooks/use-auth'

const newTransactionFormSchema = z.object({
  description: z
    .string({
      required_error: 'Description is required',
    })
    .max(120, 'Description must be less than 120 characters'),
  amount: z.string({
    required_error: 'Amount is required',
  }),
  date: z
    .string({
      required_error: 'Date is required',
    })
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date'),
})

type NewExpenseFormInputs = z.infer<typeof newTransactionFormSchema>

interface NewExpenseProps {
  onRequestClose: () => void
}
export function NewExpense({ onRequestClose }: NewExpenseProps) {
  const { auth } = useAuth()
  const queryClient = useQueryClient()

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewExpenseFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  const { mutateAsync: createExpenseFn, isPending } = useMutation({
    mutationFn: createExpense,
  })

  const onSubmit = useCallback(
    async (data: NewExpenseFormInputs) => {
      try {
        await createExpenseFn({
          ...data,
          amount: Number(data.amount.replace(/[^0-9.]/g, '')),
        })

        reset({
          date: '',
          amount: '',
          description: '',
        })

        await queryClient.invalidateQueries({
          queryKey: [`get-balance-${auth.id}`],
        })

        await queryClient.invalidateQueries({
          queryKey: [`get-total-expenses-${auth.id}`],
        })

        await queryClient.invalidateQueries({
          queryKey: [`get-movements-${auth.id}`],
        })

        onRequestClose()

        toast.success('Expense created successfully')
      } catch (error) {
        console.log(error)
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message || 'An error occurred')
        }
      }
    },
    [auth.id, createExpenseFn, onRequestClose, queryClient, reset],
  )

  const handleOnClose = useCallback(() => {
    reset({
      date: '',
      amount: '',
      description: '',
    })
    onRequestClose()
  }, [onRequestClose, reset])

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Expense</Dialog.Title>

        <CloseButton onClick={() => handleOnClose()}>
          <IconX size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="amount"
            render={({ field: { onChange, onBlur, value, name } }) => (
              <NumericFormat
                error={errors.amount?.message}
                placeholder="Amount"
                decimalScale={2}
                thousandSeparator={true}
                prefix={'$'}
                decimalSeparator="."
                min={0}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value={value ?? undefined}
              />
            )}
          />

          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, onBlur, value, name } }) => (
              <Input
                placeholder="Date"
                error={errors.date?.message}
                type="date"
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value={value ?? ''}
              />
            )}
          />

          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, onBlur, value, name } }) => (
              <Input
                placeholder="Description"
                error={errors.description?.message}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value={value ?? ''}
              />
            )}
          />

          <Button type="submit" disabled={isPending} title="Create Expense" />
        </form>
      </Content>
    </Dialog.Portal>
  )
}
