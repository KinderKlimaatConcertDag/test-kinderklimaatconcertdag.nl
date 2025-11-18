import { Layout } from '@/components/layout'
import { Image, Link } from '@/components/mdx'
import { TeamMember } from '@/components/team-member'
import { OprichterTeamMembers, BestuurTeamMembers, OverigTeamMembers } from '@/data/team-members'
import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'

const UtrechtTeam = () => {
  return (
    <Layout
      title={'Bestuur'}
      url={`/bestuur`}
    >
      <Box as='section' py={20}>
        <Container maxW='container.lg'>
          <Heading as='h1' size='2xl' textAlign={'center'}>
            De Stichting Kinder Klimaat Concert Dag
          </Heading>

          <Heading as='h2' size='xl' textAlign={'center'} mt={8} mb={4}>
            Directie en initiatiefnemers
          </Heading>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2, xl: 2, '2xl': 3 }}
            spacing={8}
            my={4}
            align={'left'}
          >
            {OprichterTeamMembers.sort((a, b) => {
              const getLastName = (name) => name.split(' ').slice(-1)[0]
              return getLastName(a.name).localeCompare(getLastName(b.name))
            }).map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </SimpleGrid>

          <Heading as='h2' size='xl' textAlign={'center'} mt={8} mb={4}>
            Bestuur
          </Heading>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2, xl: 2, '2xl': 3 }}
            spacing={4}
            my={4}
            align={'left'}
          >
            {BestuurTeamMembers.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </SimpleGrid>

          <Heading as='h2' size='xl' textAlign={'center'} mt={8} mb={4}>
            Adviseurs
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2, xl: 2, '2xl': 3 }}
            spacing={8}
            my={4}
            align={'left'}
          >
            {OverigTeamMembers.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </SimpleGrid>
          <Box py={4} fontSize={'lg'}>
            <Text>
              De statuten van Stichting Kinder Klimaat Concert Dag (KKCD) zijn <a href="statuten.pdf"><u>hier</u></a> te downloaden. KKCD committeert zich aan de naleving van de Code Cultural Governance.
            </Text>
          </Box>
          <Box py={4}>
            <Text fontSize={'lg'}>
              KKCD heeft de status van een culturele ANBI (Algemeen Nut Beogende Instelling) aangevraagd en verwacht deze binnenkort met terugwerkende kracht vanaf 14 mei 2025 te verkrijgen. Voor donateurs van culturele ANBI’s geldt een extra giftenaftrek. Particulieren mogen 1,25 keer het bedrag van de gift aftrekken in de aangifte inkomstenbelasting. Ondernemingen die onder de vennootschapsbelasting vallen, mogen 1,5 keer het bedrag van de gift aftrekken in de aangifte vennootschapsbelasting.
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

          <Box py={4}>
            <Text fontSize={'lg'}>
              <b>Adresgegevens</b><p></p>
              Bosuillaan 62, 3722XP Bilthoven | Kvk 97261734 | RSIN 867975209 | bank NL83 TRIO 0321 0861 98
            </Text>
          </Box>

        </Container>
      </Box>

    </Layout>
  )
}

export default UtrechtTeam
