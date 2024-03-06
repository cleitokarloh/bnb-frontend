import { styled } from 'styled-components'

export const Container = styled.main`
  margin: auto;
  padding: 3rem;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100svh;

  @media (max-width: 720px) {
    padding: 1rem;
  }
`

export const FormContainer = styled.div`
  max-width: 100%;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-shadow: rgba(0, 0, 0, 0.08) 0px 0.5rem 2rem;

  border-radius: ${({ theme }) => theme['br-form']};

  padding: 2rem;

  @media (max-width: 720px) {
    padding: 1rem 0.7rem;
  }

  p {
    color: ${({ theme }) => theme['gray-500']};
    margin-bottom: 1rem;
    font-size: 0.9rem;
    text-align: center;
    padding: 0 1rem;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (max-width: 1199px) and (min-width: 992px) {
    width: 375px;
  }
`

export const FormTitle = styled.h1`
  font-size: 1.4rem;
  color: ${({ theme }) => theme['gray-900']};
  margin-bottom: 1rem;
`

export const Footer = styled.footer`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-500']};
  font-size: 0.9rem;
  flex-direction: column;

  hr {
    width: 80%;
    border: none;
    border-top: 1px solid ${({ theme }) => theme['gray-300']};
    margin: 1rem;
  }

  a {
    color: ${({ theme }) => theme['green-500']};
    text-decoration: none;
    transition: color ${({ theme }) => theme['time-normal']} ease;

    &:hover {
      color: ${({ theme }) => theme['green-600']};
    }
  }
`
