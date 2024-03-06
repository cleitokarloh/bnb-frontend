import * as Dialog from '@radix-ui/react-dialog'

import {
  CloseButton,
  Content,
  Overlay,
  DepositWrapper,
  ImageWrapper,
  InfoWrapper,
  ButtonWrapper,
} from './styles'
import { IconX } from '@tabler/icons-react'

import { Button } from '../button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useCallback } from 'react'

import { useAuth } from '@/hooks/use-auth'
import { changeDepositStatus } from '@/query/admin/changeDepositStatus'
import { GetPendingDeposits } from '@/query/admin/get-pending-deposits'
import { moneyFormatter } from '@/utils/formatter'

interface NewExpenseProps {
  onRequestClose: () => void
  deposit: GetPendingDeposits
}
export function DepositDetails({ onRequestClose, deposit }: NewExpenseProps) {
  const { auth } = useAuth()
  const queryClient = useQueryClient()

  const { mutateAsync: changeDepositStatusFn } = useMutation({
    mutationFn: changeDepositStatus,
  })

  const handleChangeStatus = useCallback(
    async (status: 'approved' | 'rejected') => {
      try {
        await changeDepositStatusFn({
          id: deposit.id,
          status,
        })

        queryClient.invalidateQueries({
          queryKey: [`get-deposits-pending-${auth.id}`],
        })

        onRequestClose()

        toast.success(
          `Deposit change to "${status === 'approved' ? 'approved' : 'rejected'}" successfully`,
        )
      } catch (error) {
        console.log(error)
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message || 'An error occurred')
        }
      }
    },
    [auth.id, changeDepositStatusFn, deposit, onRequestClose, queryClient],
  )

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Deposit details</Dialog.Title>

        <CloseButton onClick={onRequestClose}>
          <IconX size={24} />
        </CloseButton>

        <DepositWrapper>
          <InfoWrapper>
            <span>Customer: </span>
            <strong>{deposit?.user.name}</strong>
          </InfoWrapper>

          <InfoWrapper>
            <span>Customer username: </span>
            <strong>{deposit?.user.username}</strong>
          </InfoWrapper>

          <InfoWrapper>
            <span>Description: </span>
            <strong>{deposit?.description}</strong>
          </InfoWrapper>

          <InfoWrapper>
            <span>Amount: </span>
            <strong>{moneyFormatter.format(deposit?.amount)}</strong>
          </InfoWrapper>

          <ImageWrapper>
            <img src={deposit?.image.file} alt="Deposit" />
          </ImageWrapper>
        </DepositWrapper>
        <ButtonWrapper>
          <Button
            type="button"
            variant="outline"
            onClick={() => handleChangeStatus('rejected')}
            title="Reject"
          />
          <Button
            type="button"
            onClick={() => handleChangeStatus('approved')}
            title="Approve"
          />
        </ButtonWrapper>
      </Content>
    </Dialog.Portal>
  )
}
