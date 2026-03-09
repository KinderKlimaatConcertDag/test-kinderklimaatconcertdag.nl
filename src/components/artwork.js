import { Box, Container, Grid, Image } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'

const posterImages = [
  '/posters/KKCD_Posters_A4_1',
  '/posters/KKCD_Posters_A4_4',
  '/posters/KKCD_Posters_A4_6',
  '/posters/KKCD_Posters_A4_10',
]

export const Artwork = () => {
  return (
    <Box id={'artwork'} as='section' scrollMarginTop={'80px'} bg='#62afa8'>
      <Container maxW='container.lg' pt={10} pb={10}>
        <Heading as='h1' size='2xl' textAlign={'center'} mt={0}>
          Artwork
        </Heading>
        <Grid mt={8} w='100%' templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }} gap={6}>
          {posterImages.map((basePath, index) => (
            <Image
              key={basePath}
              src={`${basePath}-md.jpg`}
              srcSet={`${basePath}-sm.jpg 424w, ${basePath}-md.jpg 636w, ${basePath}.jpg 848w`}
              sizes='(max-width: 48em) 100vw, (max-width: 80em) 50vw, 25vw'
              alt={`Kinder Klimaat Concert Dag poster ${index + 1}`}
              w='100%'
              borderRadius='lg'
              boxShadow='md'
              loading='lazy'
            />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
