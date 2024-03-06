import { Header } from '@/components/header'
import { Transactions } from './transactions'
import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <div>
      <Helmet title="Admin management" />
      <Header />
      <Transactions />
    </div>
  )
}
