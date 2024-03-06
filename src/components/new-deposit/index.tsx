import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'

import {
  CloseButton,
  Content,
  DepositCheck,
  ErrorMessage,
  ImageWrapper,
  Overlay,
} from './styles'
import { IconPhotoOff, IconPhotoSearch, IconX } from '@tabler/icons-react'
import { Input } from '../input'
import { NumericFormat } from '../numeric-format'
import { Button } from '../button'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useCallback } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createDeposit } from '@/query/customers/createDeposit'
import { useAuth } from '@/hooks/use-auth'

const newTransactionFormSchema = z.object({
  description: z
    .string({
      required_error: 'Description is required',
    })
    .max(120, 'Description must be less than 120 characters')
    .min(1, 'Description is required'),
  amount: z.string({
    required_error: 'Amount is required',
  }),
  image: z.custom<File>().refine((file) => file, 'Image is required.'),
})

type NewDepositFormInputs = z.infer<typeof newTransactionFormSchema>

interface NewDepositProps {
  onRequestClose: () => void
}
export function NewDeposit({ onRequestClose }: NewDepositProps) {
  const { auth } = useAuth()
  const queryClient = useQueryClient()

  const { mutateAsync: createDepositFn, isPending } = useMutation({
    mutationFn: createDeposit,
  })

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<NewDepositFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      amount: '',
      description: '',
      image: undefined,
    },
  })

  const onSubmit = useCallback(
    async (data: NewDepositFormInputs) => {
      try {
        await createDepositFn(data)
        reset({
          amount: '',
          description: '',
          image: undefined,
        })

        await queryClient.invalidateQueries({
          queryKey: [`get-checks-${auth.id}`],
        })
        onRequestClose()
        toast.success('Deposit created successfully. An admin will review it.')
      } catch (error) {
        console.log(error)
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message || 'An error occurred')
        }
      }
    },
    [auth.id, createDepositFn, onRequestClose, queryClient, reset],
  )

  const handleChangeImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files) {
        setValue('image', files[0])
      }
    },
    [setValue],
  )

  const handleOnClose = useCallback(() => {
    reset({
      amount: '',
      description: '',
      image: undefined,
    })
    onRequestClose()
  }, [onRequestClose, reset])

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Deposit</Dialog.Title>

        <CloseButton onClick={handleOnClose}>
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
                value={value}
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
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="description"
            render={() => (
              <DepositCheck>
                <header>
                  <h4>Deposit Check</h4>
                  <label htmlFor="deposit-check">
                    <input
                      type="file"
                      name="deposit-check"
                      onChange={handleChangeImage}
                      accept="image/*"
                    />
                    <span>
                      <IconPhotoSearch /> Select Image
                    </span>
                  </label>
                </header>
                <ImageWrapper>
                  {watch('image') ? (
                    <img
                      src={URL.createObjectURL(watch('image'))}
                      alt="Deposit Check"
                    />
                  ) : (
                    <IconPhotoOff />
                  )}
                </ImageWrapper>
                {errors.image?.message && (
                  <ErrorMessage>{errors.image?.message}</ErrorMessage>
                )}
              </DepositCheck>
            )}
          />

          <Button type="submit" disabled={isPending} title="Create Deposit" />
        </form>
      </Content>
    </Dialog.Portal>
  )
}
