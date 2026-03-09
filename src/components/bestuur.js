import { Box, Container, Image, Text, Link } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'

export const Bestuur = () => {
  return (
    <Box id={'bestuur'} as='section' scrollMarginTop={'80px'}  bg='#EEEEEE'>
      <Container maxW='container.lg' pt={10} pb={10}>

        <Heading as='h1' size='xl' textAlign={'center'}>
          Het bestuur
        </Heading>
        <Heading as='h2' size='xl' id='henk-van-de-meulen'>
            Henk van de Meulen
        </Heading>
        <Text as='span' textStyle={'paragraphBlock'}>
          Henk is voorzitter van de Stichting Kinder Klimaat Concert Dag.
        </Text>

        <Heading as='h2' size='xl' id='erik-de-ruijter-van-steveninck'>
            Erik de Ruijter van Steveninck
        </Heading>
        <Text as='span' textStyle={'paragraphBlock'}>
          Erik is secretaris van de Stichting Kinder Klimaat Concert Dag.
        </Text>

        <Heading as='h2' size='xl' id='atze-sytsma'>
            Atze Sytsma
        </Heading>
        <Text as='span' textStyle={'paragraphBlock'}>
          Atze is penningmeester van de Stichting Kinder Klimaat Concert Dag.
        </Text>
        <Heading as='h2' size='xl' id='ilonka-kolthof'>
            Ilonka Kolthof
        </Heading>
        <Text as='span' textStyle={'paragraphBlock'}>
          Ilonka is bestuurslid van de Stichting Kinder Klimaat Concert Dag.
        </Text>

        <Heading as='h1' size='xl' textAlign={'center'}>
          Adviseurs
        </Heading>
        <Box py={5}>
          <Box display='flex' flexDirection={{ base: 'column', md: 'row-reverse' }} alignItems='flex-start' gap={6}>
            <Image
              src='/team/ErikvanSebille.png'
              alt='Erik van Sebille'
              w={{ base: '100%', md: '220px' }}
              maxW={{ base: '320px', md: '220px' }}
              borderRadius='lg'
              boxShadow='md'
              flexShrink={0}
            />
            <Box>
              <Heading as='h2' size='xl' pt={0} mt={0} id='erik-van-sebille'>
                  Erik van Sebille
              </Heading>
              <Text as='span' textStyle={'paragraphBlock'}>
                Erik is hoogleraar oceanografie en wetenschapscommunicatie aan de <Link isExternal href='https://www.uu.nl/staff/EvanSebille'>Universiteit Utrecht</Link>. Hij is gespecialiseerd in oceaanstromingen en de verspreiding van microplastics in de oceanen. Hij heeft een grote passie voor het klimaat en is een veelgevraagd spreker over klimaatverandering en de rol van de oceanen.
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>

  )
}
