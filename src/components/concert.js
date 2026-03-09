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
    <Box id={'concert'} as='section' scrollMarginTop={'80px'} bg='#72a9c9'>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl' mt={0} pt={10} textAlign='center'>
          Editie 2026
        </Heading>
        <Text>
          <Text as='span'
            textStyle={'paragraphBlock'}
            fontWeight='bold'
            fontSize='2xl'
            ml={0}
            bg='#cd5b1c'
            p={3}
            borderRadius='md'
            textAlign='center'
          >
            De eerste Kinder Klimaat Concert Dag is op zondag 27 september 2026 in TivoliVredenburg in Utrecht.
          </Text>
        </Text>
        <Box py={5} position='relative'>
          <Box>
          <Box pr={{ base: 0, md: '430px' }}>
          <Text as='span' textStyle={'paragraphBlock'}>
            Tijdens de avondvoorstelling  “Behoud onze seizoenen!” zorgen muziek, dans en kunst gemaakt door kinderen en jongeren voor een bruisende, ontroerende en virtuoze avond. Je wordt meegenomen van de bittere kou in de winter naar de eerste zonnige lentedag, en van een zwoele zomeravond naar de wervelende herfstwind. Diverse stijlen wisselen elkaar af.
          </Text>
          <UnorderedList fontSize={'lg'} pb={5} spacing={3} styleType={'none'} ml={0}>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color='#cd5b1c' />
              Locatie: Hertz zaal TivoliVredenburg, Utrecht | Aanvang: NTB
            </ListItem>
          </UnorderedList>
          <Text as='span' textStyle={'paragraphBlock'}>
            Na de voorstelling presenteren middelbare scholieren uit de regio Utrecht hun eigen onderzoeken over het klimaat.
          </Text>
          <UnorderedList fontSize={'lg'} pb={5} spacing={3} styleType={'none'} ml={0}>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color='#cd5b1c' />
              Locatie: Punt foyer TivoliVredenburg, Utrecht | Aanvang: NTB
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
        </Box>
        </Box>
          <Image
            src='/posters/KKCD_Posters_A4_10-md.jpg'
            srcSet='/posters/KKCD_Posters_A4_10-sm.jpg 424w, /posters/KKCD_Posters_A4_10-md.jpg 636w, /posters/KKCD_Posters_A4_10.jpg 848w'
            sizes='(max-width: 48em) 100vw, 400px'
            alt='Kinder Klimaat Concert Dag poster'
            position={{ base: 'static', md: 'absolute' }}
            top={0}
            right={0}
            w={{ base: '100%', md: '400px' }}
            maxW={{ md: '400px' }}
            mt={{ base: 4, md: 0 }}
            mb={{ base: 0, md: 0 }}
            borderRadius='lg'
            boxShadow='md'
          />
        </Box>

      </Container>
    </Box>
  )
}
