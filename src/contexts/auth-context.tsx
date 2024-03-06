import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { AxiosResponse } from 'axios'

import { api } from '@/lib/axios'

interface User {
  id: number
  name: string
  username: string
  role: 'admin' | 'customer'
}

export type AuthContextDataProps = {
  auth: User
  setAuth: (param: User) => void
  handleLogout: () => Promise<void>
  handleRefetch: () => void
  loading: boolean
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = React.createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [auth, setAuth] = useState({} as User)
  const [refetch, setRefetch] = useState(1)
  const [loading, setLoading] = useState(true)

  const handleRefetch = useCallback(() => {
    setRefetch((state) => state + 1)
  }, [])

  const handleLogout = useCallback(async () => {
    try {
      const { status } = await api.get('/sanctum/logout')

      if (status === 200) {
        localStorage.removeItem('@bnb-bank:token')
        handleRefetch()
        toast.success('Thank you for using BNB Bank, return shortly!')
        window.location.href = '/'
      }
    } catch (error) {
      toast.error('Something are wrong.')
    }
  }, [handleRefetch])

  useEffect(() => {
    const authenticated = localStorage.getItem('@bnb-bank:token') !== null

    if (!authenticated) {
      return
    }

    async function fetchAuth() {
      try {
        const { data }: AxiosResponse<User> = await api.get('/user')
        setAuth(data)
      } catch (error) {
        toast.error('Não foi possível buscar seus dados.')
      } finally {
        setLoading(false)
      }
    }

    fetchAuth()
  }, [refetch])

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        handleLogout,
        handleRefetch,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
