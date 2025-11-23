import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

import { Image, Link } from '@/components/mdx'

export const HeroBanner = () => {
  return (
    <Box as='section'>
      <Container maxW='container.lg' pt={24} centerContent>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          justify={'center'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '4xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}
              >
                Kinder Klimaat Concert Dag
              </Text>
              <br />
              <Text as={'span'} color={'blue.400'}>
                We mogen nog niet stemmen, maar luister vandaag naar ons
              </Text>
            </Heading>
          </Stack>
          <Stack flex={1} spacing={{ base: 10, md: 20 }}>
            {
              <Image
                src={'/5lhrrQ0EVzWQAgyn.JPG'}
                alt='Foto van Donna en Luna van Leeuwen met Viool en Cello. Foto door Alex Schröder'
                objectFit='contain'
              ></Image>
            }

          </Stack>
        </Stack>
        <Text fontSize={'lg'} py={5}>
          Wij zijn <b>Luna en Donna</b>, twee jonge musici met een groot hart voor muziek én voor het klimaat. Vanuit die combinatie ontstond ons idee om een nationale Kinder Klimaat Concert Dag te organiseren: een dag waarop kinderen en jongeren uit heel Nederland hun stem laten horen door middel van muziek, kunst en wetenschap.
        </Text>
        <Text fontSize={'lg'} pb={5}>
          Ons plan groeide letterlijk aan de keukentafel. We voelen hoop over wat wij als generatie nog kunnen doen om de aarde te beschermen, maar ook machteloosheid over hoe weinig invloed we nu hebben. Kinderen mogen nog niet stemmen, maar de beslissingen die vandaag worden genomen, bepalen wél onze toekomst.
        </Text>
        <Text fontSize={'lg'}>
          Met deze dag willen we laten zien dat bezorgdheid ook op een positieve, verbindende manier kan worden geuit. Niet door boos te zijn, maar door iets te laten horen wat iedereen kan raken: muziek.
        </Text>
      </Container>
    </Box>
  )
}
