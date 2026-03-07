import {
  Box,
  Container,
  ListIcon,
  ListItem,
  Link,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import React from 'react'
import NextLink from 'next/link'

import { Heading, Image } from '@/components/mdx'
import Head from 'next/head'

export const Stichting = () => {
  return (
    <Box id={'stichting'} as='section' scrollMarginTop={'80px'} bg='#62afa8'>
      <Container maxW='container.lg'  pt={10} pb={10}>
        <Heading as='h1' size='2xl' textAlign={'center'}>
          De Stichting Kinder Klimaat Concert Dag
        </Heading>


        <Box py={4} fontSize={'lg'}>
          <Text>
            De stichting Kinder Klimaat Concert Dag is door de 	Belastingdienst aangemerkt als 'algemeen nut beogende instelling' (ANBI).
          </Text>
        </Box>
        <Box py={4} fontSize={'lg'}>
          <Text>
            De statuten van Stichting Kinder Klimaat Concert Dag (KKCD) zijn <Link isExternal href="/documents/statuten.pdf">hier</Link> te downloaden. KKCD committeert zich aan de naleving van de Code Cultural Governance.
          </Text>
        </Box>
        <Box py={4}>
          <Text fontSize={'lg'}>
            Beleidsplan: TODO
          </Text>
        </Box>

        <Box py={4}>
          <Text fontSize={'lg'}>
            Vooralsnog ontvangt de directie maximaal 10% van de totale projectbegroting.
          </Text>
        </Box>
        <Box py={4}>
          <Text fontSize={'lg'}>
            De bestuursleden en adviseur doen hun werk onbezoldigd. Zij krijgen desgewenst een vergoeding van de door hen gemaakte kosten.
          </Text>
        </Box>

      </Container>
    </Box>
  )
}