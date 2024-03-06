import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '@/pages/admin/dashboard'
import { PageNotFound } from '@/pages/404'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
