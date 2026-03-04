import {
  Box,
  Container,
  ListItem,
  Link,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import React from 'react'

import { Heading } from '@/components/mdx'
import Head from 'next/head'

export const HoeHetBegon = () => {
  return (
    <Box id={'hoehetbegon'} as='section' scrollMarginTop={'100px'}>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl'>
          Hoe het begon
        </Heading>
        <Text fontSize={'lg'} pb={5}>
          Van keukentafel idee tot de eerste nationale Kinder Klimaat Concert Dag.
        </Text>
        <Text fontSize={'lg'} pb={5}>
          Al vanaf heel jonge leeftijd merkten wij, Luna (viool) en Donna (cello), dat we tijdens concerten die wij gaven mensen konden ontroeren.
        </Text>
        <Text fontSize={'lg'} pb={5}>
          We vroegen ons af: kunnen we deze kracht niet inzetten om iets te bereiken wat ons al jaren bezighoudt: <Text as='span' fontWeight='bold'>klimaatverandering</Text>.
        </Text>
        <Text fontSize={'lg'} pb={5}>
          Dit is een nog onopgelost probleem waarin de belangrijkste uitdaging is: hoe overtuig je mensen, dat zij nu iets moeten veranderen om voor ons toekomstige klimaat te zorgen. Lukt dat met alleen cijfers en tabellen of helpt het als je via muziek ook emotie gebruikt? Zouden kinderen, die muziek maken, en vragen: “wil je alsjeblieft iets voor mijn toekomst doen?”, een nieuwe snaar kunnen raken?
        </Text>
        <Text fontSize={'lg'} pb={5}>
          In 2023 en 2024 hebben we ons idee voorgelegd aan diverse directies van culturele instellingen. We spraken met directies van de NTR, NPO klassiek, Nationale Jeugdorkesten Nederland, Het Concertgebouw, de Kindermuziekweek, de Universiteit Utrecht en diverse fondsen. We kregen zoveel aanmoedigingen dat we besloten dat we ermee door moesten gaan. Na een zorgvuldig proces waarin we het doel, de toon en onze aanpak uitwerkten, bereikten we al deze hoogtepunten!
        </Text>

        <Heading as='h2'>
            Mijlpalen:
        </Heading>
        <UnorderedList fontSize={'lg'} pb={5} spacing={3}>
          <ListItem>juli 2023: Pitch “de Kinder Klimaat Concert Dag” wint de Prinses Christina Concours Academy.</ListItem>
          <ListItem>14 mei 2025: Oprichting van de Stichting Kinder Klimaat Concert Dag.</ListItem>
          <ListItem>najaar 2025: Crowdfunding bij platform Voordekunst wordt een groot succes.</ListItem>
          <ListItem>december 2025: Pitch en optreden als Jonge Helden in Podium Klassiek.</ListItem>
          <ListItem>december 2025: De organisatie wordt uitgebreid met marketeer Tim Treffers en fondsenwerver Maartje Valk.</ListItem>
          <ListItem>januari 2026: Nominatie voor de Young Impact Award 2026 in de categorie Klimaat.</ListItem>
        </UnorderedList>

      </Container>
    </Box>
  )
}
