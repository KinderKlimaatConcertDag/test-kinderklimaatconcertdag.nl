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
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl'>
          Editie 2026
        </Heading>
        <Text fontSize={'lg'} pb={5} whiteSpace={'pre-line'}>
          {`De eerste editie van de Kinder Klimaat Concert Dag vindt plaats in Utrecht op zondag 27 september 2026 in TivoliVredenburg.

Tijdens de avondvoorstelling  “Behoud onze seizoenen!” zorgen muziek, dans en kunst gemaakt door kinderen en jongeren voor een bruisende, ontroerende en virtuoze avond. Je wordt meegenomen van de bittere kou in de winter naar de eerste zonnige lentedag, en van een zwoele zomeravond naar de wervelende herfstwind. Diverse stijlen wisselen elkaar af.

LOCATIE: Hertz zaal Vredenburg, Utrecht
AANVANG: NTB

Na de voorstelling presenteren middelbare scholieren uit de regio Utrecht hun eigen onderzoeken over het klimaat.
LOCATIE: Punt foyer TivoliVredenburg, Utrecht
AANVANG: NTB

De randprogrammering komt tot stand in samenwerking met de Universiteit Utrecht.

Kaarten: Koop je kaartjes via de kassa van TivoliVredenburg

Voor de voorstelling kunnen kinderen hùn vragen over het klimaat stellen aan een klimaat panel van wetenschappers van de Universiteit Utrecht.`}
        </Text>

      </Container>
    </Box>
  )
}
