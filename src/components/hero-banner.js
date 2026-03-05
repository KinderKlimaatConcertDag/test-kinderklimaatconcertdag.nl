import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

import { Image, Link } from '@/components/mdx'

export const HeroBanner = () => {
  return (
    <Box as='section'>
      <Container maxW='container.lg' pt={24}>
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
                alt='Luister voor onze toekomst'
                objectFit='contain'
              ></Image>
            }
          </Stack>
          <Stack flex={1} spacing={{ base: 10, md: 20 }}>
            {
              <Image
                src={'/assets/KKCD_Payoff_zww.png'}
                alt='Luister voor onze toekomst'
                objectFit='contain'
              ></Image>
            }

          </Stack>
        </Stack>
        <Text fontSize={'lg'} py={5}>
          De Kinder Klimaat Concert dag is een nationale dag waarop het perspectief van kinderen en jongeren op klimaatverandering centraal staat. De kracht van kinderen is dat ze een open blik hebben en eerlijke vragen stellen. Juist door hun kwetsbaarheid kunnen ze mensen aan het denken zetten.
        </Text>
        <Text fontSize={'lg'} pb={5}>
          De kracht die kinderen hebben als ze zich uiten in muziek en kunst is uniek. De Kinder Klimaat Concert Dag geeft 1 dag in het jaar kinderen en jongeren een platform om op hun manier op te komen voor hun toekomst, door muziek te maken, te tekenen, te dansen en te dichten.
        </Text>
        <Text fontSize={'lg'} pb={5}>
          Positief en hoopvol.
        </Text>
        <Text fontSize={'lg'} pb={5}>
          Voor kinderen gaat het klimaat nog niet over voor- en tegenstanders van beleid. De Stichting Kinder Klimaat Concert Dag is volledig onafhankelijk en niet verbonden met politieke partijen. Wel werken we samen met culturele partners.
        </Text>
        <Box mt={8} display='flex' justifyContent='center'>
          <Image
            src='/posters/KKCD_Posters_A4_6.jpg'
            alt='Kinder Klimaat Concert Dag poster'
            w='100%'
            maxW='800px'
            mx='auto'
            borderRadius='lg'
            boxShadow='md'
          />
        </Box>
      </Container>
    </Box>
  )
}
