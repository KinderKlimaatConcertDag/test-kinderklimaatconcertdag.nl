import { Concert, HeroBanner, Funders } from '@/components'
import { VideoDemo } from '@/components/video-demo'

import { Layout } from '@/components/layout'

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
      <Concert />
      <VideoDemo />
      <Funders />
    </Layout>
  )
}
