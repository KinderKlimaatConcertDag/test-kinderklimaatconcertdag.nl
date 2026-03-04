import { Concert, HeroBanner, Funders, HoeHetBegon, Partners } from '@/components'

import { Layout } from '@/components/layout'
import { Media } from '@/components/media'

export default function IndexPage() {
  return (
    <Layout
      url={`/`}
      title={'Kinder Klimaat Concert Dag'}
      card={
        'assets/logo_no-text.png'
      }
      // enableBanner
    >
      <HeroBanner />
      <HoeHetBegon />
      <Concert />
      <Media />
      <Partners />
      <Funders />
    </Layout>
  )
}
