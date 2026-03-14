import { Box, Container, Stack, Text } from '@chakra-ui/react'
import { Image } from '@/components/mdx'

export const HeroBanner = () => {
  return (
    <Box as='section' bg='#EEEEEE'>
      <Container maxW='container.lg' pt={24} pb={12}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          justify={'center'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 10, md: 20 }}>
            {
              <Image
                src={'/assets/KKCD_Logo_rgb_blauw.png'}
                alt='Kinder Klimaat Concert Dag'
                objectFit='contain'
              />
            }
          </Stack>
        </Stack>
        <Text py={5}>
          <Text as='span' textStyle={'paragraphBlock'}>
            Tijdens de Kinder Klimaat Concert Dag staat het perspectief van kinderen en jongeren op klimaatverandering centraal.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Kinderen hebben nog een open blik, stellen eerlijke vragen en kunnen door hun kwetsbaarheid mensen aan het denken zetten.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Daarom willen we kinderen één dag in het jaar een platform geven om door muziek te maken, te tekenen, te dansen en te dichten op te komen voor hun toekomst:{' '}
            <Text as='span' display='inline' fontStyle='italic'>
              positief en hoopvol!
            </Text>
          </Text>
        </Text>
        <Box mt={8} w='100%'>
          <Image
            src='/posters/KKCD_Posters_A4_6-lg.jpg'
            srcSet='/posters/KKCD_Posters_A4_6-sm.jpg 424w, /posters/KKCD_Posters_A4_6-md.jpg 636w, /posters/KKCD_Posters_A4_6.jpg 848w'
            sizes='100vw'
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
