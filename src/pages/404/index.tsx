import { Button } from '@/components/button'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export function PageNotFound() {
  const navigate = useNavigate()
  return (
    <Container>
      <Helmet title="Page not found" />
      <h1>404 - Page Not Found</h1>
      <Button title="Return to homepage" onClick={() => navigate('/')} />
    </Container>
  )
}
