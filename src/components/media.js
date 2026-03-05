import { Box, Container, Image } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'
import React from 'react'

export const Media= () => {
  return (
    <Box id={'media'} as='section' my={10} scrollMarginTop={'100px'}>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl'>
          Media
        </Heading>
        <Box
          w='100%'
          h='450px'
          borderRadius='lg'
          overflow='hidden'
          boxShadow='md'
          display='flex'
        >
          <iframe
            width='100%'
            height='100%'
            style={{ display: 'block', border: 0 }}
            src='https://player.vimeo.com/external/1133141624.m3u8?s=a41df2d90cbb06b09fb6d6584260f4b6399c3fe7&oauth2_token_id=58974900'
            title='Kinder Klimaat Concert Dag pitch'
            allowFullScreen
          ></iframe>
        </Box>

        <Box mt={8} w='100%'>
          <Image
            src='/posters/KKCD_Posters_A4_1.jpg'
            alt='Kinder Klimaat Concert Dag poster'
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
