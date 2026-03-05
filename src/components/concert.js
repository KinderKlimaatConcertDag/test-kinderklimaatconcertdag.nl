import {
  Box,
  Container,
  Link,
  Text,
  UnorderedList,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'

import { Heading, Image } from '@/components/mdx'

export const Concert = () => {
  return (
    <Box id={'concert'} as='section' scrollMarginTop={'100px'}>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl'>
          Editie 2026
        </Heading>
        <Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            De eerste editie van de Kinder Klimaat Concert Dag vindt plaats in Utrecht op zondag 27 september 2026 in TivoliVredenburg.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Tijdens de avondvoorstelling  “Behoud onze seizoenen!” zorgen muziek, dans en kunst gemaakt door kinderen en jongeren voor een bruisende, ontroerende en virtuoze avond. Je wordt meegenomen van de bittere kou in de winter naar de eerste zonnige lentedag, en van een zwoele zomeravond naar de wervelende herfstwind. Diverse stijlen wisselen elkaar af.
          </Text>
          <UnorderedList fontSize={'lg'} pb={5} spacing={3} styleType={'none'} ml={0}>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color='#cd5b1c' />
              LOCATIE: Hertz zaal Vredenburg, Utrecht | AANVANG: NTB
            </ListItem>
          </UnorderedList>
          <Text as='span' textStyle={'paragraphBlock'}>
            Na de voorstelling presenteren middelbare scholieren uit de regio Utrecht hun eigen onderzoeken over het klimaat.
          </Text>
          <UnorderedList fontSize={'lg'} pb={5} spacing={3} styleType={'none'} ml={0}>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color='#cd5b1c' />
              LOCATIE: Punt foyer TivoliVredenburg, Utrecht | AANVANG: NTB
            </ListItem>
          </UnorderedList>
          <Text as='span' textStyle={'paragraphBlock'}>
            De randprogrammering komt tot stand in samenwerking met de Universiteit Utrecht.
          </Text>
          <UnorderedList fontSize={'lg'} pb={5} spacing={3} styleType={'none'} ml={0}>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color='#cd5b1c' />
              Kaarten: Koop je kaartjes via de kassa van TivoliVredenburg.
            </ListItem>
          </UnorderedList>
          <Text as='span' textStyle={'paragraphBlock'}>
            Voor de voorstelling kunnen kinderen hùn vragen over het klimaat stellen aan een klimaat panel van wetenschappers van de Universiteit Utrecht.
          </Text>
        </Text>

        <Box mt={8} w='100%'>
          <Image
            src='/posters/KKCD_Posters_A4_10.jpg'
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
