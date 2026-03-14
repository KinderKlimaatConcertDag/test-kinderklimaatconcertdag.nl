import { Box, Container, Link, Text } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'

export const StichtingInfo = () => {
  return (
    <Box id={'stichting_info'} as='section' scrollMarginTop={'80px'} bg='#62afa8'>
      <Container maxW='container.lg'  pt={10} pb={10}>
        <Heading as='h1' size='2xl' textAlign={'center'}>
          De Stichting Kinder Klimaat Concert Dag
        </Heading>

        <Box py={4} fontSize={'lg'}>
          <Text>
            De Stichting Kinder Klimaat Concert Dag is volledig onafhankelijk en niet verbonden met politieke partijen. Wel werken we samen met culturele partners.
          </Text>
        </Box>
        <Box py={4} fontSize={'lg'}>
          <Text>
            De Stichting Kinder Klimaat Concert Dag is vanaf de oprichtingsdatum op 14 mei 2025 door de Belastingdienst aangemerkt als 'algemeen nut beogende instelling' (ANBI).
          </Text>
        </Box>
        <Box py={4} fontSize={'lg'}>
          <Text>
            De statuten van Stichting Kinder Klimaat Concert Dag (KKCD) zijn <Link isExternal href="/documents/statuten.pdf">hier</Link> te downloaden. KKCD committeert zich aan de naleving van de Code Cultural Governance.
          </Text>
        </Box>
        <Box py={4}>
          <Text fontSize={'lg'}>
            Het beleidsplan van Stichting Kinder Klimaat Concert Dag is <Link isExternal href="/documents/BeleidsplanKKCD-20260126.pdf">hier</Link> te downloaden.
          </Text>
        </Box>

        {/* <Box py={4}>
          <Text fontSize={'lg'}>
            De beloning van de directie bedraagt maximaal 10% van de totale projectbegroting.
          </Text>
        </Box> */}
        <Box py={4}>
          <Text fontSize={'lg'}>
            De bestuursleden en adviseur doen hun werk onbezoldigd. Zij krijgen desgewenst een vergoeding van de door hen gemaakte kosten.
          </Text>
        </Box>

      </Container>
    </Box>
  )
}