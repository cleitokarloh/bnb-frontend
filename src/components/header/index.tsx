import { IconPower } from '@tabler/icons-react'
import {
  HeaderContainer,
  HeaderContent,
  LogoutButton,
  UserContainer,
} from './styles'
import { useAuth } from '@/hooks/use-auth'

export function Header() {
  const { handleLogout, auth } = useAuth()
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>BNB Bank</h1>
        <UserContainer>
          <p>Hello, {auth.name}!</p>
          <LogoutButton onClick={() => handleLogout()}>
            <IconPower size={20} />
          </LogoutButton>
        </UserContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
