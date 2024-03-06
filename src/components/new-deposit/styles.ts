import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-200']};

  @media (max-width: 500px) {
    min-width: 100%;
    padding: 1.5rem 1rem;
  }

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    button[type='submit'] {
      height: 50px;
      border: 0;
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.25rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
        transition: background-color 0.2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
`

export const DepositCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  height: 100%;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    label {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.5rem 1rem;

      white-space: nowrap;
      font-size: 1rem;
      font-weight: 400;
      vertical-align: middle;
      border-radius: ${(props) => props.theme['br-form']};
      background: ${(props) => props.theme['gray-200']};
      color: ${(props) => props.theme['gray-500']};
      border: 1px solid ${(props) => props.theme['gray-300']};
      transition:
        background ${(props) => props.theme['time-normal']} ease,
        color ${(props) => props.theme['time-normal']} ease,
        border ${(props) => props.theme['time-normal']} ease,
        opacity ${(props) => props.theme['time-normal']} ease;

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:hover {
          cursor: pointer;
        }
      }
    }

    input[type='file'] {
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      opacity: 0;
      z-index: 3;
      cursor: pointer;
    }
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  aspect-ratio: 16 / 9;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-500']}
  border: 1px solid ${(props) => props.theme['gray-200']};
  border-radius: ${(props) => props.theme['br-form']};
  background-image: linear-gradient(
      45deg,
      ${(props) => props.theme['gray-100']} 25%,
      transparent 25%
    ),
    linear-gradient(
      -45deg,
      ${(props) => props.theme['gray-100']} 25%,
      transparent 25%
    ),
    linear-gradient(
      45deg,
      transparent 75%,
      ${(props) => props.theme['gray-100']} 75%
    ),
    linear-gradient(
      -45deg,
      transparent 75%,
      ${(props) => props.theme['gray-100']} 75%
    );
  background-size: 20px 20px;
  background-position:
    0 0,
    0 10px,
    10px -10px,
    -10px 0px;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center center;
      z-index: 1;
    }

    svg {
      width: 60px;
      height: 60px;
      z-index: 1;
      color: ${(props) => props.theme['gray-500']};
    }
`

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme['red-500']};
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`
