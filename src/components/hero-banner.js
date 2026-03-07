import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

import { Image, Link } from '@/components/mdx'

export const HeroBanner = () => {
  return (
    <Box as='section' bg='#EEEEEE'>
      <Container maxW='container.lg' pt={24} pb={12}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          justify={'center'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 10, md: 20 }}>
            {
              <Image
                src={'/assets/KKCD_Logo_rgb_blauw.png'}
                alt='Kinder Klimaat Concert Dag'
                objectFit='contain'
              />
            }
          </Stack>
        </Stack>
        <Text py={5}>
          <Text as='span' textStyle={'paragraphBlock'}>
            De Kinder Klimaat Concert Dag is een nationale dag waarop het perspectief van kinderen en jongeren op klimaatverandering centraal staat. De kracht van kinderen is dat ze een open blik hebben en eerlijke vragen stellen. Juist door hun kwetsbaarheid kunnen ze mensen aan het denken zetten.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            De kracht die kinderen hebben als ze zich uiten in muziek en kunst is uniek. De Kinder Klimaat Concert Dag geeft 1 dag in het jaar kinderen en jongeren een platform om op hun manier op te komen voor hun toekomst, door muziek te maken, te tekenen, te dansen en te dichten.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'} fontStyle='italic'>
            Positief en hoopvol.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
          Voor kinderen gaat het klimaat nog niet over voor- en tegenstanders van beleid. De Stichting Kinder Klimaat Concert Dag is volledig onafhankelijk en niet verbonden met politieke partijen. Wel werken we samen met culturele partners.
          </Text>
        </Text>
        <Box mt={8} w='100%'>
          <Image
            src='/posters/KKCD_Posters_A4_6.jpg'
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
