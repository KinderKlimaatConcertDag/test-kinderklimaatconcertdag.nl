import { Artwork, Fotos, Media } from '@/components'
import { Layout } from '@/components/layout'

export default function Resources() {
  return (
    <Layout
      url={`/resources`}
      title={'Kinder Klimaat Concert Dag'}
      card={
        '/assets/KKCD_Vignet-Blaadje_rgb_blauw.png'
      }
    >
      <Media />
      <Artwork />
      <Fotos />
    </Layout>
  )
}