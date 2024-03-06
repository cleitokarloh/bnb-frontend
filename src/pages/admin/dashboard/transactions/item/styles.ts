import styled, { keyframes } from 'styled-components'
import { TransactionType } from '.'

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1rem;

  transition: background-color ${({ theme }) => theme['time-normal']} ease;

  &:hover {
    background-color: ${({ theme }) => theme['gray-100']};
    border-radius: ${({ theme }) => theme['br-card']};
    cursor: pointer;
  }

  @media (max-width: 720px) {
    flex-direction: column;

    * {
      margin: 0.25rem 0;
      text-align: left;
    }
  }
`

export const Title = styled.h4`
  display: flex;
  font-size: 0.9rem;
  color: ${({ theme }) => theme['gray-600']};
  width: 350px;

  @media (max-width: 720px) {
    width: 100%;
  }
`

export const Date = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.2rem;
  margin-bottom: 0.5rem;
  flex-direction: column;

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-500']};
  }

  strong {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-900']};
  }

  @media (max-width: 720px) {
    width: 100%;
    gap: 0;

    strong {
      margin-top: -0.2rem;
    }
  }
`

interface BadgeProps {
  status: 'pending' | 'approved' | 'rejected'
}

export const Badge = styled.span<BadgeProps>`
  display: inline-flex;
  padding: 0.25rem 0.45rem;
  border-radius: ${({ theme }) => theme['br-sm']};
  background-color: ${(props) =>
    props.status === 'pending'
      ? props.theme['yellow-300']
      : props.status === 'approved'
        ? props.theme['green-300']
        : props.theme['red-300']};

  color: ${({ theme }) => theme['gray-900']};
  font-size: 0.875rem;
  border-radius: ${({ theme }) => theme['br-card']};
`
interface AmountProps {
  type: TransactionType
}
export const Amount = styled.div<AmountProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;

  width: 150px;

  svg {
    color: ${(props) =>
      props.type === 'deposit'
        ? props.theme['green-500']
        : props.theme['red-500']};
  }

  @media (max-width: 720px) {
    width: 100%;
    justify-content: flex-start;
    margin-top: 0.5rem;
  }
`

const pulseAnimation = keyframes`
   0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
`

export const Skeleton = styled.span`
  display: block;
  height: 2.5rem;
  width: 60%;
  background: ${(props) => props.theme['gray-400']};
  border-radius: ${(props) => props.theme['br-card']};
  animation: ${pulseAnimation} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`
