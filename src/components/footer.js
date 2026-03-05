import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react'

import { ColorModeImage } from '@/components/ColorModeImage'
import { Image, Link } from '@/components/mdx'
import { footerItems } from '@/data/footer-items'

const SocialButton = ({ children, label, href }) => {
  return (
    <Button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
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
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
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
        <SimpleGrid
          w='100%'
          columns={{ base: 1, sm: 1, md: 3 }}
          spacing={{ base: 4, md: 8 }}
        >
          <Stack spacing={8}>
            <Box>
              <ColorModeImage
                w={32}
                lightSrc={'/assets/KKCD_Logo_rgb_blauw.png'}
                darkSrc={'/assets/KKCD_Logo_diap.png'}
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
                  _hover={{ color: 'black' }}
                >
                  {item.label}
                </Link>
              )
            })}
          </Stack>
          <Stack align={'flex-start'} justifySelf={{ base: 'start', md: 'end' }}>
            <ListHeader>Stichting</ListHeader>
            {footerItems.stichting.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  fontSize={'sm'}
                  _hover={{ color: 'black' }}
                >
                  {item.label}
                </Link>
              )
            })}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
