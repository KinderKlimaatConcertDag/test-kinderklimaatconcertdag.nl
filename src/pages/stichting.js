import { Bestuur, SteunOns, Contact, StichtingInfo } from '@/components'
import { Layout } from '@/components/layout'

export default function Stichting() {
  return (
    <Layout
      url={`/stichting`}
      title={'Kinder Klimaat Concert Dag'}
      card={
        '/assets/KKCD_Vignet-Blaadje_rgb_blauw.png'
      }
    >
      <StichtingInfo />
      <Bestuur />
      <SteunOns />
      <Contact />
    </Layout>
  )
}
