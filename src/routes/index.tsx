import { useAuth } from '@/hooks/use-auth'
import { AuthRoutes } from './auth'
import { CustomerRoutes } from './customers'
import { AdminRoutes } from './admin'

export const Router = () => {
  const { auth, loading } = useAuth()

  const authenticated = localStorage.getItem('@bnb-bank:token') !== null

  if (!authenticated) return <AuthRoutes />

  if (loading) return <></>

  if (auth.role === 'customer') {
    return <CustomerRoutes />
  }

  return <AdminRoutes />
}
