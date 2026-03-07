import {
  Box,
  Container,
  Text,
} from '@chakra-ui/react'
import React from 'react'

import { Heading } from '@/components/mdx'

export const SteunOns = () => {
  return (
    <Box id={'steunons'} as='section' scrollMarginTop={'80px'}>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl'  textAlign={'center'} color='#cd5b1c'>
          Steun ons!
        </Heading>

        <Box my={8}>
          <Text fontSize={'lg'}>
            De organisatie van de Kinder Klimaat Concert Dag is altijd op zoek naar vrienden die ons idee willen ondersteunen. Met iedere gift zijn wij al geholpen, want het neerzetten van een dergelijk evenement is een grote investering. Wilt u financieel of op een andere manier bijdragen aan de ontwikkeling en naamsbekendheid van ons ambitieuze plan? Neem dan contact met ons op via Kinderklimaatconcertdag@gmail.com.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
