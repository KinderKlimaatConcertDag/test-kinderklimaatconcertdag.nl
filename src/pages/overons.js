import { Team } from '@/components'
import { Layout } from '@/components/layout'

export default function OverOns() {
  return (
    <Layout
      url={`/overons`}
      title={'Kinder Klimaat Concert Dag'}
      card={
        '/assets/KKCD_Vignet-Blaadje_rgb_blauw.png'
      }
    >
      <Team />
    </Layout>
  )
}
