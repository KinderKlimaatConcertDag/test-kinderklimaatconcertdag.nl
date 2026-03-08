import { Box, Container } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'
import React from 'react'

export const Media= () => {
  return (
    <Box id={'media'} as='section' scrollMarginTop={'80px'} bg='#eeeeee'>
      <Container maxW='container.lg'  pt={10} pb={10}>
        <Heading as='h1' size='2xl' textAlign={'center'}>
          Media
        </Heading>
        <Box
          w='100%'
          h={{ base: '305px', md: '560px' }}
          borderRadius='lg'
          overflow='hidden'
          boxShadow='md'
          display='flex'
        >
          <Box
            as='video'
            width='100%'
            height='100%'
            display='block'
            controls
            playsInline
            preload='metadata'
            poster='/media/video-first-frame.jpg'
            sx={{ objectFit: 'contain', backgroundColor: '#eeeeee' }}
          >
            <source
              src='https://player.vimeo.com/external/1133141624.m3u8?s=a41df2d90cbb06b09fb6d6584260f4b6399c3fe7&oauth2_token_id=58974900'
              type='application/x-mpegURL'
            />
            Your browser does not support HTML5 video.
          </Box>
        </Box>

      </Container>
    </Box>
  )
}
