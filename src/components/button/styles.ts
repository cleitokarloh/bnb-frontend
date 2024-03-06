import styled, { css } from 'styled-components'

interface ButtonProps {
  variant?: 'outline' | 'submit'
}
export const Container = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  transition: filter 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  ${({ variant, theme }) =>
    variant === 'outline' &&
    css`
      background-color: transparent;
      border: 1px solid ${theme['red-500']};
      color: ${theme['red-500']};

      &:hover {
        filter: brightness(1.1);
        border: 1px solid ${theme['red-700']};
        color: ${theme['red-700']};
      }
    `}
`

export const Spinner = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid ${({ theme }) => theme.white};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  animation: spin 0.7s linear infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
