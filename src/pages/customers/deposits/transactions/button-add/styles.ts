import styled from 'styled-components'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme['gray-700']};

  min-width: calc(${({ theme }) => theme['fs-icon']} + 0.9rem);
  min-height: calc(${({ theme }) => theme['fs-icon']} + 0.9rem);

  border-radius: 50%;

  cursor: pointer;

  transition: background ${({ theme }) => theme['time-normal']} ease;

  &:hover {
    background: ${({ theme }) => theme['gray-600']};
  }
`

export const DropdownMenuRoot = styled(DropdownMenuRadix.Root)`
  display: flex;
  align-items: center;
`

export const DropdownMenuButton = styled(DropdownMenuRadix.Trigger)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1.25rem;
  color: ${({ theme }) => theme['gray-500']};
  transition: color ${({ theme }) => theme['time-normal']} ease;

  &:hover {
    color: ${({ theme }) => theme['gray-700']};
  }
`

export const DropdownMenuPortal = styled(DropdownMenuRadix.Portal)``

export const DropdownMenuContent = styled(DropdownMenuRadix.Content)`
  background: ${({ theme }) => theme.white};
  padding: 1rem;
  border-radius: ${({ theme }) => theme['br-card']};
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: ${({ theme }) => theme[`time-normal`]};
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  top: 100%;
  right: 50%;
  z-index: 1;

  min-width: 220px;
  background-color: white;
  margin-top: 0.8rem;

  div + div {
    > div:before {
      content: '';
      position: absolute;
      top: 0;
      width: 80%;
      height: 1px;
      background: ${({ theme }) => theme['gray-100']};
      margin: 0 auto;
      left: 0;
      right: 0;
    }
  }
`

export const DropdownMenuItem = styled(DropdownMenuRadix.Item)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
  transition: background ${({ theme }) => theme['time-normal']} ease;

  &:hover {
    background: ${({ theme }) => theme['gray-100']};
    border-radius: ${({ theme }) => theme['br-card']};
    cursor: pointer;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.25rem;
  }

  span {
    color: ${({ theme }) => theme['gray-500']};
    font-size: 0.895rem;
  }
`
