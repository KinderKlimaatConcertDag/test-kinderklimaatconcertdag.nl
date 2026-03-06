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
import { Partners as data } from '@/data/partners'

import { Heading } from '@/components/mdx'

export const Partners = () => {
  const partners = React.useMemo(() => data, [])
  return (
    <Box id={'partners'} as='section' scrollMarginTop={'100px'}>
      <Container maxW='container.lg'>
        <Heading as='h1' size='xl' textAlign='center'>
          Partners
        </Heading>

        <Box my={8}>
          {/* <Text fontSize={'lg'}>
            De stichting Kinder Klimaat Concert Dag werkt met deze partners samen:
          </Text> */}

          <Grid
            templateColumns={`repeat(${partners.length}, minmax(auto, max-content))`}
            gap={6}
            my={4}
            justifyContent='center'
          >
            {partners.map((partner, index) => (
              <Tooltip key={index} label={partner.name}>
                <GridItem
                  as={Link}
                  href={partner.url}
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  borderRight={
                    index < partners.length - 1 ? '1px solid #ccc' : 'none'
                  }
                  pr={4}
                >
                  <ColorModeImage
                    lightSrc={partner.logo_light}
                    darkSrc={partner.logo_dark}
                    maxH={20}
                    alt={partner.name}
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
