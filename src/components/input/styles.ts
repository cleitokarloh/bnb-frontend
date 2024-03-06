import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 575px) {
    margin-bottom: 0.75rem;
  }
`
export const LabelComponent = styled.label`
  user-select: none;
  color: ${({ theme }) => theme['gray-500']};
  opacity: 1;
  position: absolute;
  font-weight: 400;
  font-size: 1rem;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  padding: 1rem 0.75rem;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
  border: ${({ theme }) => theme['bs-border-width']} solid transparent;
  transform-origin: 0 0;

  min-height: calc(3.5rem + 2px);

  width: 100%;
  display: inline-block;
  position: absolute;

  @media (max-width: 575px) {
    line-height: 1.25;
    padding: 0.85rem 0.75rem;
  }

  ${({ theme }) => css`
    transition:
      color ${theme['time-normal']} ease,
      transform ${theme['time-normal']} ease;
  `}
`
interface ErrorProps {
  attention: 'false' | 'true'
}
export const InputComponent = styled.input<ErrorProps>`
  display: block;
  width: 100%;
  font-weight: 400;
  appearance: none;

  line-height: 1.25;
  font-size: 1rem;
  background: ${({ theme }) => theme['gray-100']};
  padding: 1.1rem 0.925rem;
  min-height: calc(2rem + 2px);

  &::placeholder {
    opacity: 0;
  }

  border: 1px solid ${({ theme }) => theme['gray-300']};
  color: ${({ theme }) => theme['gray-700']};

  border-radius: ${({ theme }) => theme['br-form']};
  box-shadow: none !important;

  @media (max-width: 575px) {
    line-height: 1.25;
    padding: 0.85rem 0.75rem;
    min-height: calc(1.7rem + 1.25em + 2px);
    height: calc(1.7rem + 1.25em + 2px);
  }

  &:not(:placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
    ~ label {
      transform: scale(0.75) translateY(-0.7rem) translateX(0.15rem);
    }
  }

  &:focus {
    outline: 'none';
    border-color: ${({ theme }) => theme['green-500']}!important;

    padding-top: 1.625rem;
    padding-bottom: 0.625rem;

    ~ label {
      transform: scale(0.75) translateY(-0.7rem) translateX(0.15rem);
    }
    @media (max-width: 575px) {
      padding-top: 1.4rem;
      padding-bottom: 0.3rem;
    }

    ${({ attention, theme }) =>
      attention === 'true' &&
      css`
        border-color: ${({ theme }) => theme['gray-300']}!important;
        border-left: 4px solid ${theme['red-500']}!important;
      `}
  }

  ${({ attention, theme }) =>
    attention === 'true' &&
    css`
      border-left: 4px solid ${theme['red-500']}!important;
    `}
`

export const Error = styled.span`
  display: block;
  bottom: -0.1rem;
  color: ${({ theme }) => theme['red-500']};
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0 0.75rem;

  transition: transform ${({ theme }) => theme['time-normal']} ease;
  pointer-events: none;
  opacity: 1;
  transform-origin: 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: ${({ theme }) => theme['bs-border-width']} solid transparent;

  ${({ theme }) => css`
    transition:
      color ${theme['time-normal']} ease,
      transform ${theme['time-normal']} ease;
  `}
`
