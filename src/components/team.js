import { Box, Container, Image, Text } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'

export const Team = () => {
  return (
    <Box id={'team'} as='section' scrollMarginTop={'80px'}  bg='#EEEEEE'>
      <Container maxW='container.lg' pt={10} pb={10}>
        <Heading as='h1' size='2xl' textAlign={'center'}>
          Team
        </Heading>
        <Heading as='h1' size='xl' textAlign={'center'}>
          De oprichters
        </Heading>
        <Box py={5}>
          <Box display='flex' flexDirection={{ base: 'column', md: 'row-reverse' }} alignItems='flex-start' gap={6}>
            <Image
              src='/team/LunavanLeeuwen.jpeg'
              alt='Luna van Leeuwen'
              w={{ base: '100%', md: '220px' }}
              maxW={{ base: '320px', md: '220px' }}
              borderRadius='lg'
              boxShadow='md'
              flexShrink={0}
            />
            <Box>
          <Heading as='h2' size='xl' pb={4} pt={0} mt={0} id='luna-van-leeuwen'>
            Luna van Leeuwen
          </Heading>
          <Text as='span' textStyle={'paragraphBlock'}>
            De Nederlandse violiste Luna van Leeuwen wordt al vanaf jonge leeftijd geroemd om haar bijzondere zeggingskracht.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Op het Koninklijk Concertgebouw Concours prees juryvoorzitter Jan Willem de Vriend haar “poëtische en zeer overtuigende spel”, en bij het winnen van de Nationale Finale van het Prinses Christina Concours roemde Francis van Broekhuizen haar “gave het publiek mee te nemen, alsof ze met de muziek een verhaal vertelt en .. de spanning vasthoudt tot de allerlaatste noot.” Naar aanleiding van haar concert op het Delft Chamber Music festival zei Liza Ferschtman: “Ze heeft dat grote talent om voor mensen te spelen”.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Luna soleerde vanaf haar 14de met diverse orkesten zoals het Residentie Orkest en de Real Filharmonia Galicia in Santiago en ze gaf bijzondere concerten. Zo werd ze uitgenodigd om het Aandeelhouders Concert van het Concertgebouw te openen in de Grote Zaal. Ze won eerste prijzen op nationale en internationale concoursen zoals het Wettbewerb für junge Geiger in Düsseldorf en Het Nederlands Vioolconcours in de jongste leeftijdscategorie. En meest recent een tweede prijs en de prijs voor de beste performance op het Oskar Back Concours 2026.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Als concertmeester van het Jeugdorkest Nederland kreeg ze lovende kritieken voor haar vertolking van de Sheherazade van Rimsky Korsakov. "Onbetwist hoogtepunt waren de geweldige solistische mijmeringen van concertmeester Luna van Leeuwen.” (NRC Handelsblad). Ze droeg bij aan het “All of Bach” project van de Nederlandse Bachvereniging en trad op met hedendaags repertoire tijdens festivals zoals het Aurora festival en het Grachtenfestival.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Luna genoot haar opleiding bij Koosje van Haeringen aan de jong talentklas van het Koninklijk Conservatorium en studeerde daarna bij Veselina Manikova en Stephan Picard aan de Hanns Eisler Hochschule für Musik in Berlijn.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Luna zet zich in voor het klimaat als initiatiefnemer, samen met haar zus Donna (cello), van de Kinder Klimaat Concert Dag, waar kinderen en jongeren via muziek op een positieve manier aandacht vragen voor het klimaat. De eerste editie zal plaatsvinden op 27 september 2026 in TivoliVredenburg.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Luna speelt op een Johannes Cuypers uit 1801 en woont in Berlijn.
          </Text>
            </Box>
          </Box>
        </Box>

        <Box py={5}>
          <Box display='flex' flexDirection={{ base: 'column', md: 'row-reverse' }} alignItems='flex-start' gap={6}>
            <Image
              src='/team/DonnavanLeeuwen.jpeg'
              alt='Donna van Leeuwen'
              w={{ base: '100%', md: '220px' }}
              maxW={{ base: '320px', md: '220px' }}
              borderRadius='lg'
              boxShadow='md'
              flexShrink={0}
            />
            <Box>
          <Heading as='h2' size='xl' pb={4} pt={0} mt={0} id='donna-van-leeuwen'>
            Donna van Leeuwen
          </Heading>
          <Text as='span' textStyle={'paragraphBlock'}>
            Donna's uitvoering van Bach's cello suite tijdens de Nationale Finale van het Prinses Christina Concours werd door juryvoorzitter Michel Dispa beschreven als “gezond, modern cellospel met een uitgebalanceerd stijlbesef.”
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Ze studeerde cello bij Lenian Benjamins en daarna bij Jan Ype Nota op het Jong Koninklijk Conservatorium. Donna werd al jong uitgenodigd voor bijzondere concerten. Ze gaf haar eerste recital op 13-jarige leeftijd in de Westerkerk, waar ze o.a. de gehele eerste cellosuite van Bach en Bruch’s Kol Nidrei met orgel uitvoerde. Verder speelde ze op de Kinderdodenherdenking en het Kinderprinsengrachtconcert. Tijdens het Grachtenfestival soleerde ze in Haydn’s concert in C, uitgezonden door NPO Start. Ook verscheen ze als “Jonge Held” bij Podium Klassiek. Donna heeft prijzen gewonnen op diverse nationale cello en muziek concoursen (1ste prijs Britten concours en publieksprijs), het Prinses Christina Concours en was finalist in het Koninklijk Concertgebouw Concours.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Donna heeft naast de liefde voor muziek veel plezier in debatteren en wetenschap. Ze stond in de finale van de Oxford Summer Boarding School Debate Contest. Verder volgde ze het honours science programma U-talent van de Universiteit Utrecht. Na haar eindexamen VWO (cum laude) combineert ze een studie Economie (Erasmus University College) met celloactiviteiten. Zo is ze aanvoerder van de cello groep in het Jeugd Orkest Nederland.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Donna zet zich in voor het klimaat als initiatiefnemer, samen met haar zus Luna (viool), van de Kinder Klimaat Concert Dag, waar kinderen en jongeren via muziek op een positieve manier aandacht vragen voor het klimaat. De eerste editie zal plaatsvinden op 27 september 2026 in TivoliVredenburg.
          </Text>
            </Box>
          </Box>
        </Box>

        <Heading as='h1' size='xl' textAlign={'center'}>
          Ondersteuners
        </Heading>
        <Heading as='h2' size='xl' id='maartje-valk'>
            Maartje Valk
        </Heading>
        <Text as='span' textStyle={'paragraphBlock'}>
          Maartje geeft zakelijk advies en is verantwoordelijk voor fondsenwerving van de Kinder Klimaat Concert Dag 2026. Daarnaast is ze zakelijk leider van het Bachfestival Dordrecht en programmamanager van het Blockbusterfonds.
        </Text>
        <Heading as='h2' size='xl' id='tim-treffers'>
            Tim Treffers
        </Heading>
        <Text as='span' textStyle={'paragraphBlock'}>
          Tim is verantwoordelijk voor communicatie rond de Kinder Klimaat Concert Dag 2026.
        </Text>

      </Container>
    </Box>

  )
}
