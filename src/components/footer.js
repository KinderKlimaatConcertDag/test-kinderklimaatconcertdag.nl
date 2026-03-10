import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Text,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react'

import { Image, Link } from '@/components/mdx'
import { footerItems } from '@/data/footer-items'

const SocialButton = ({ children, label, href }) => {
  return (
    <Button
      bg={'blackAlpha.100'}
      rounded={'full'}
      w={12}
      h={12}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'blackAlpha.200',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontFamily={'heading'} fontWeight={'bold'} my={2}>
      {children}
    </Text>
  )
}

export const Footer = () => {
  return (
    <Box
      bg={'#eec216'}
      color={'gray.900'}
      as='footer'
    >
      <Container maxW='container.lg' my={8}>
        <Grid
          w='100%'
          templateColumns={{ base: '1fr', sm: '1fr', md: '2fr 1fr 1fr' }}
          gap={{ base: 4, md: 8 }}
        >
          <Stack spacing={8}>
            <Box>
              <Image
                w={32}
                src={'/assets/KKCD_Logo_rgb_blauw.png'}
                alt={'KinderKlimaatConcertDag logo'}
              />
            </Box>

            <Text fontSize={'sm'}>
              © {new Date().getFullYear()}, Stichting Kinder Klimaat Concert Dag. <br />
              Apache 2.0 Licensed.
            </Text>
          </Stack>
          <Stack align={'flex-start'} justifySelf={{ base: 'start', md: 'end' }}>
            <ListHeader>Het evenement</ListHeader>
            {footerItems.evenement.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  fontSize={'sm'}
                  fontFamily={'Neue Haas Grotesk'}
                  borderRadius='md'
                  px={2}
                  _hover={{
                    textDecoration: 'none',
                    bg: 'blackAlpha.100',
                    color: 'black',
                  }}
                >
                  {item.label}
                </Link>
              )
            })}
          </Stack>
          <Stack align={'flex-start'} justifySelf={{ base: 'start', md: 'end' }}>
            <ListHeader>Over ons</ListHeader>
            {footerItems.stichting.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  fontSize={'sm'}
                  fontFamily={'Neue Haas Grotesk'}
                  borderRadius='md'
                  px={2}
                  _hover={{
                    textDecoration: 'none',
                    bg: 'blackAlpha.100',
                    color: 'black',
                  }}
                >
                  {item.label}
                </Link>
              )
            })}
          </Stack>
        </Grid>
      </Container>
    </Box>
  )
}
