import { Header } from '@/components/header'
import { Summary } from '@/components/summary'
import { Transactions } from './transactions'
import { Helmet } from 'react-helmet-async'

export function Deposits() {
  return (
    <div>
      <Helmet title="Deposits" />
      <Header />
      <Summary />
      <Transactions />
    </div>
  )
}
