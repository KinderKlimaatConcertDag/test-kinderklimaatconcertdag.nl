import {
  Box,
  Container,
  ListIcon,
  ListItem,
  Link,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import React from 'react'
import NextLink from 'next/link'

import { Heading, Image } from '@/components/mdx'
import Head from 'next/head'

export const HoeHetBegon = () => {
  return (
    <Box id={'hoehetbegon'} as='section' scrollMarginTop={'100px'}>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl' color='#62afa8'>
          Hoe het begon
        </Heading>
        <Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Van keukentafel idee tot de eerste nationale Kinder Klimaat Concert Dag.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Al vanaf heel jonge leeftijd merkten wij, <Link as={NextLink} href='/oprichters#luna-van-leeuwen'>Luna</Link> (viool) en Donna (cello), dat we tijdens concerten die wij gaven mensen konden ontroeren.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            We vroegen ons af: kunnen we deze kracht niet inzetten om iets te bereiken wat ons al jaren bezighoudt: <Text as='span' fontWeight='bold'>klimaatverandering</Text>.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Dit is een nog onopgelost probleem waarin de belangrijkste uitdaging is: hoe overtuig je mensen, dat zij nu iets moeten veranderen om voor ons toekomstige klimaat te zorgen. Lukt dat met alleen cijfers en tabellen of helpt het als je via muziek ook emotie gebruikt? Zouden kinderen, die muziek maken, en vragen: “wil je alsjeblieft iets voor mijn toekomst doen?”, een nieuwe snaar kunnen raken?
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            In 2023 en 2024 hebben we ons idee voorgelegd aan diverse directies van culturele instellingen. We spraken met directies van de NTR, NPO klassiek, Nationale Jeugdorkesten Nederland, Het Concertgebouw, de Kindermuziekweek, de Universiteit Utrecht en diverse fondsen. We kregen zoveel aanmoedigingen dat we besloten dat we ermee door moesten gaan. Na een zorgvuldig proces waarin we het doel, de toon en onze aanpak uitwerkten, bereikten we al deze hoogtepunten!
          </Text>
        </Text>

        <Heading as='h2' color='#62afa8'>
            Mijlpalen:
        </Heading>
        <UnorderedList fontSize={'lg'} pb={5} spacing={3} styleType={'none'} ml={0}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='#62afa8' />
            Juli 2023: Pitch “de Kinder Klimaat Concert Dag” wint de Prinses Christina Concours Academy.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='#62afa8' />
            14 mei 2025: Oprichting van de Stichting Kinder Klimaat Concert Dag.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='#62afa8' />
            Najaar 2025: Crowdfunding bij platform Voordekunst wordt een groot succes.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='#62afa8' />
            December 2025: Pitch en optreden als Jonge Helden in Podium Klassiek.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='#62afa8' />
            December 2025: De organisatie wordt uitgebreid met marketeer Tim Treffers en fondsenwerver Maartje Valk.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='#62afa8' />
            Januari 2026: Nominatie voor de Young Impact Award 2026 in de categorie Klimaat.
          </ListItem>
        </UnorderedList>
        {/* <Box mt={8} w='100%'>
          <Image
            src='/posters/KKCD_Posters_A4_4.jpg'
            alt='Kinder Klimaat Concert Dag poster'
            w='100%'
            maxW='100%'
            borderRadius='lg'
            boxShadow='md'
          />
        </Box> */}

      </Container>
    </Box>
  )
}
