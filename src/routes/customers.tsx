import { PageNotFound } from '@/pages/404'
import { Dashboard } from '@/pages/customers/dashboard'
import { Deposits } from '@/pages/customers/deposits'
import { Route, Routes } from 'react-router-dom'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/deposits" element={<Deposits />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
