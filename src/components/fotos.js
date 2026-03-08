import { Box, Container, Image } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'
import React from 'react'

export const Fotos= () => {
  return (
    <Box id={'fotos'} as='section' py={10} scrollMarginTop={'80px'}>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl' textAlign={'center'} mt={0}>
          Foto's
        </Heading>
        <Box mt={8} w='100%'>
          <Image
            src='/media/5lhrrQ0EVzWQAgyn.JPG'
            alt='Foto van Donna en Luna van Leeuwen'
            w='100%'
            maxW='100%'
            borderRadius='lg'
            boxShadow='md'
          />
        </Box>
      </Container>
    </Box>
  )
}
