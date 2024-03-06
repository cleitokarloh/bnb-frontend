import { useLocation } from 'react-router-dom'
import { Container, Nav, NavItem } from './styles'

export function Menu() {
  const navigate = useLocation()

  return (
    <Container>
      <Nav>
        <NavItem
          href="/"
          status={navigate.pathname === '/' ? 'active' : 'inactive'}
        >
          Transactions
        </NavItem>
        <NavItem
          href="/deposits"
          status={navigate.pathname === '/deposits' ? 'active' : 'inactive'}
        >
          Deposits
        </NavItem>
      </Nav>
    </Container>
  )
}
