import { Header } from 'widgets/Header'
import { Layout } from 'shared/ui/Layout'
import { Signup } from 'features/Signup'

export default function Auth() {
  return (
    <Layout>
      <Header />
      <Signup />
    </Layout>
  )
}
