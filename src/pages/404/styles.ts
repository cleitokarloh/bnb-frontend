import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 0;
  }

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme['gray-700']};
  }
`
