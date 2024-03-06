import { Header } from '@/components/header'
import { Summary } from '@/components/summary'
import { Transactions } from './transactions'
import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <div>
      <Helmet title="Transactions" />
      <Header />
      <Summary />
      <Transactions />
    </div>
  )
}
