import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: 3.25rem;
  margin-bottom: 3.25rem;

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;

  @media (max-width: 500px) {
    h2 {
      font-size: 1.25rem;
    }
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme['gray-700']};
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  background-color: ${({ theme }) => theme.white};
  border-radius: ${({ theme }) => theme['br-card']};

  hr {
    width: 100%;
    height: 1px;
    border: none;
    background-color: ${({ theme }) => theme['gray-100']};
  }
`

export const Items = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;

  > div + div {
    border-top: 1px solid ${({ theme }) => theme['gray-100']};
  }
`

export const EmptyList = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme['gray-500']};

  padding: 1rem;

  border-radius: ${({ theme }) => theme['br-card']};
  border: 1px solid ${({ theme }) => theme['gray-100']};

  a {
    color: ${({ theme }) => theme['green-500']};
    text-decoration: none;
  }
`
