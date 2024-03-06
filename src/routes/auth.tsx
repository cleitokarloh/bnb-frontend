import { Route, Routes } from 'react-router-dom'

import { Login } from '@/pages/auth/login'
import { Register } from '@/pages/auth/register'
import { PageNotFound } from '@/pages/404'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
