import { DesktopNav } from '@/components/desktop-nav'
import { Link } from '@/components/mdx'
import { MobileNav } from '@/components/mobile-nav'
import { menuItems } from '@/data/menu-items'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { ColorModeImage } from '@/components/ColorModeImage'
import React from 'react'

export const Header = () => {
  const navItems = React.useMemo(() => menuItems, [])

  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      <Flex
        as={'header'}
        pos='fixed'
        top={'0'}
        w={'full'}
        minH={'60px'}
        boxShadow={'sm'}
        zIndex={'999'}
        justify={'center'}
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: '#eec216',
        }}
      >
        <Container as={Flex} maxW={'container.lg'} align={'center'}>
          <Flex
            flex={{ base: '0', md: 'auto' }}
            ml={{ base: -2 }}
            mr={{ base: 6, md: 0 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              size={'sm'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>

          <Flex
            flex={{ base: 1, md: 'auto' }}
            justify={{ base: 'start', md: 'start' }}
          >
            <Stack
              as={Link}
              href={'/'}
              direction={'row'}
              fontFamily={'heading'}
              py={3}
              alignItems={'center'}
              spacing={{ base: 2, sm: 4 }}
            >
              <ColorModeImage
                w={20}
                lightSrc={'/assets/KKCD_Logo_rgb_blauw.png'}
                darkSrc={'/assets/KKCD_Logo_diap.png'}
                alt={'KKCD logo'}
              />
            </Stack>
          </Flex>

          <Stack
            direction={'row'}
            align={'center'}
            spacing={{ base: 6, md: 8 }}
            flex={{ base: 1, md: 'auto' }}
            justify={'flex-end'}
          >
            <DesktopNav
              navItems={navItems}
              display={{ base: 'none', md: 'flex' }}
            />
          </Stack>
        </Container>
      </Flex>
      <MobileNav isOpen={isOpen} navItems={navItems} />
    </Box>
  )
}
