import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-700']};
  padding: 2.5rem 0 7.5rem;

  h1 {
    color: ${(props) => props.theme.white};
  }
`

export const HeaderContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 720px) {
    p {
      font-size: 0.875rem;
    }

    flex-direction: column;
  }
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  p {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.25rem;
  }
`

export const LogoutButton = styled.button`
  justify-content: center;
  display: flex;
  align-items: center;
  border: 0;
  background: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0.6rem;
  border-radius: ${(props) => props.theme['br-card']};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['red-700']};
    transition: background-color 0.2s;
  }

  @media (max-width: 720px) {
    font-size: 0.875rem;
    position: absolute;
    top: 26%;
    right: 24%;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    font-size: 0.875rem;
    position: absolute;
    top: 26%;
    right: 5%;
    margin: 0 auto;
  }
`
