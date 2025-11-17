import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

import { Image, Link } from '@/components/mdx'

export const HeroBanner = () => {
  return (
    <Box as='section'>
      <Container maxW='container.lg' py={24} centerContent>
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
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
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
              {/* <Text as={'span'} color={'blue.400'}>
                Explore the ocean with a virtual research vessel
              </Text> */}
            </Heading>
            <Text fontSize={'lg'}>
              Wij, Luna en Donna van Leeuwen, willen samen met heel veel andere kinderen en jongeren, met behulp van muziek en kunst onze stem laten horen voor het klimaat, voor onze toekomst.
            </Text>
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
      </Container>
    </Box>
  )
}
