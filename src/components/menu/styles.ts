import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 0;
  }
`

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 0 2rem;

  gap: 1rem;
`
interface Item {
  status: 'active' | 'inactive'
}
export const NavItem = styled.a<Item>`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f3f4f6;
  color: #1e1e1e;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }

  ${(props) =>
    props.status === 'active' &&
    css`
      font-weight: 500;
      border-bottom: 2px solid ${({ theme }) => theme['green-500']};
    `}
`
