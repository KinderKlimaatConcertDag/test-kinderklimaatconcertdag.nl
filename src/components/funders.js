import {
  Box,
  Container,
  Image,
  Text,
  Link,
  Grid,
  GridItem,
  Tooltip,
} from '@chakra-ui/react'
import { ColorModeImage } from '@/components/ColorModeImage'
import React from 'react'
import { Funders as data } from '@/data/funders'

import { Heading } from '@/components/mdx'

export const Funders = () => {
  const funders = React.useMemo(() => data, [])
  return (
    <Box id={'funders'} as='section'>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl'>
          Steun ons!
        </Heading>

        <Box my={8}>
          <Text fontSize={'lg'}>
            De organisatie van de Kinder Klimaat Concert Dag is altijd op zoek naar vrienden die ons idee willen ondersteunen. Met iedere gift zijn wij al geholpen, want het neerzetten van een dergelijk evenement is een grote investering. Wilt u financieel of op een andere manier bijdragen aan de ontwikkeling en naamsbekendheid van ons ambitieuze plan? Neem dan contact met ons op via Kinderklimaatconcertdag@gmail.com.
          </Text>

          <Grid
            templateColumns={`repeat(${funders.length}, minmax(auto, max-content))`}
            gap={6}
            my={4}
            justifyContent='center'
          >
            {funders.map((funder, index) => (
              <Tooltip key={index} label={funder.name}>
                <GridItem
                  as={Link}
                  href={funder.url}
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  borderRight={
                    index < funders.length - 1 ? '1px solid #ccc' : 'none'
                  }
                  pr={4}
                >
                  <ColorModeImage
                    lightSrc={funder.logo_light}
                    darkSrc={funder.logo_dark}
                    maxH={20}
                    alt={funder.name}
                  />
                </GridItem>
              </Tooltip>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
