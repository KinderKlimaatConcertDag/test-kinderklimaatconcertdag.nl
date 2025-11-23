import {
  Box,
  Container,
  Link,
  Text,
} from '@chakra-ui/react'
import React from 'react'

import { Heading } from '@/components/mdx'

export const Concert = () => {
  return (
    <Box id={'concert'} as='section'>
      <Container maxW='container.lg' centerContent>
        <Heading as='h1' size='2xl'>
          Kinder Klimaat Concert Dag, de eerste editie
        </Heading>
        <Text fontSize={'lg'} pb={5}>
          Op zondag 27 september 2026 organiseren we de eerste Kinder Klimaat Concert Dag in TivoliVredenburg in Utrecht. Met deze eerste editie willen wij een jaarlijkse traditie starten waarin kinderen door het samenbrengen van muziek, kunst en wetenschap hun stem laten horen voor het klimaat.
        </Text>
        <Text fontSize={'lg'} pb={5}>
          De precieze invulling van de dag is nog niet bekend, maar er zal een concert worden gegeven in de Hertz zaal, waar wij samen met andere kinderen, orkesten, jazzbands en andere groepen op zullen treden. Kinderen die geen instrument bespelen kunnen meedoen met een tekening of een gedicht.
        </Text>
        <Text fontSize={'lg'} pb={5}>
          Ook worden milieuwetenschappers en vertegenwoordigers uit de politiek en het bedrijfsleven uitgenodigd. Aan hen wordt gevraagd om als “plus one” een kind of jongere uit hun familie of omgeving mee te nemen.
        </Text>
        <Text fontSize={'lg'} pb={5}>
          De concertzaal zal zo hopelijk gevuld zijn met de mensen die op dit moment het beleid maken, en zij die de gevolgen hiervan zullen merken. Verder worden in de foyers onderzoeken gepresenteerd die middelbare scholieren hebben gedaan, samen met het de leerlingen van het {' '}
          <Link
            href='https://u-talent.nl'
            color='blue.500'
            isExternal
          >
            U-Talent programma
          </Link>{' '}
          bij de Universiteit Utrecht.
        </Text>

      </Container>
    </Box>
  )
}
