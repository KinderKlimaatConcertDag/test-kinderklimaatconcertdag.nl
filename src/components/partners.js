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
import React from 'react'
import { Partners as data } from '@/data/partners'

import { Heading } from '@/components/mdx'

export const Partners = () => {
  const partners = React.useMemo(() => data, [])
  return (
    <Box id={'partners'} as='section' scrollMarginTop={'80px'}>
      <Container maxW='container.lg'>
        <Heading as='h1' size='xl' textAlign='center' color='#6f73b2'>
          Partners
        </Heading>

        <Box my={8}>
          {/* <Text fontSize={'lg'}>
            De stichting Kinder Klimaat Concert Dag werkt met deze partners samen:
          </Text> */}

          <Grid
            templateColumns={{
              base: '1fr',
              md: `repeat(${partners.length}, minmax(auto, max-content))`,
            }}
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
                  borderRight={{
                    base: 'none',
                    md: index < partners.length - 1 ? '1px solid #6f73b2' : 'none',
                  }}
                  pr={{ base: 0, md: 4 }}
                  pb={{ base: 4, md: 0 }}
                >
                  <Image
                    src={partner.logo_light}
                    alt={partner.name}
                    maxH={20}
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
