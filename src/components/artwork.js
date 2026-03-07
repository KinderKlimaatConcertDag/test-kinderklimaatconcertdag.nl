import { Box, Container, Grid, Image } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'
import React from 'react'

const posterImages = [
  '/posters/KKCD_Posters_A4_1.jpg',
  '/posters/KKCD_Posters_A4_4.jpg',
  '/posters/KKCD_Posters_A4_6.jpg',
  '/posters/KKCD_Posters_A4_10.jpg',
]

export const Artwork = () => {
  return (
    <Box id={'artwork'} as='section' scrollMarginTop={'100px'} bg='#62afa8'>
      <Container maxW='container.lg' pt={10} pb={10}>
        <Heading as='h1' size='2xl' textAlign={'center'} mt={0}>
          Artwork
        </Heading>
        <Grid mt={8} w='100%' templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }} gap={6}>
          {posterImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Kinder Klimaat Concert Dag poster ${index + 1}`}
              w='100%'
              borderRadius='lg'
              boxShadow='md'
            />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
