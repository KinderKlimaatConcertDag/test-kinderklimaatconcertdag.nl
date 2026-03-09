import {
  Box,
  Container,
  ListIcon,
  ListItem,
  Link,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { Heading } from '@/components/mdx'
import { CheckCircleIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'


export const HoeHetBegon = () => {
  return (
    <Box id={'hoehetbegon'} as='section' scrollMarginTop={'80px'}>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl' mt={0} pt={10} textAlign='center' color='#62afa8'>
          Hoe het begon
        </Heading>
        <Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Van keukentafel idee tot de eerste nationale Kinder Klimaat Concert Dag.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Al vanaf heel jonge leeftijd merkten wij, <Link as={NextLink} href='/overons#luna-van-leeuwen'>Luna</Link> (viool) en <Link as={NextLink} href='/overons#donna-van-leeuwen'>Donna</Link> (cello), dat we tijdens concerten die wij gaven mensen konden ontroeren.
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

        <Heading as='h2'  textAlign='center' color='#62afa8'>
            Mijlpalen
        </Heading>
        <UnorderedList fontSize={'lg'} pb={5} spacing={3} styleType={'none'} ml={0}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='#62afa8' />
            Juli 2023: Pitch “de Kinder Klimaat Concert Dag” wint de Prinses Christina Concours Academy.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='#62afa8' />
            14 mei 2025: Oprichting van de <Link as={NextLink} href='/stichting'>Stichting Kinder Klimaat Concert Dag</Link>.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='#62afa8' />
            Najaar 2025: <Link isExternal href='https://www.voordekunst.nl/projecten/20033-kinder-klimaat-concert-dag'>Crowdfunding bij platform Voordekunst</Link> wordt een groot succes.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='#62afa8' />
            December 2025: Pitch en optreden als Jonge Helden in Podium Klassiek.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='#62afa8' />
            December 2025: De organisatie wordt uitgebreid met marketeer <Link href='overons#tim-treffers'>Tim Treffers</Link> en fondsenwerver <Link href='overons#maartje-valk'>Maartje Valk</Link>.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='#62afa8' />
            Januari 2026: Nominatie voor de <Link isExternal href='https://youngimpact.nl/nominees/donna-luna-van-leeuwen/'>Young Impact Award 2026</Link> in de categorie Klimaat.
          </ListItem>
        </UnorderedList>

      </Container>
    </Box>
  )
}
