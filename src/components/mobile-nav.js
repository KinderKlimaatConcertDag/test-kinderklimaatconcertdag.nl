import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Collapse,
  Flex,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

import { Link } from '@/components/mdx'

const MobileNavItem = ({ href, children, label }) => {
  const { isOpen, onToggle } = useDisclosure()

  const handleToggle = (e) => {
    if (children) {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <Stack spacing={4} onClick={handleToggle}>
      <Flex
        py={2}
        px={2}
        as={Link}
        href={href ?? '/#'}
        justify={'space-between'}
        align={'center'}
        borderRadius='md'
        _hover={{
          textDecoration: 'none',
          bg: 'blackAlpha.100',
        }}
      >
        <Text
          fontFamily={'heading'}
          fontWeight={600}
          whiteSpace={'nowrap'}
          color={'black'}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color={'black'}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.200'}
          align={'start'}
        >
          {' '}
          {children &&
            children.map((child, index) => (
              <Link
                key={index}
                href={child.href ?? '#'}
                py={2}
                px={2}
                borderRadius='md'
                fontFamily={'heading'}
                fontSize={'sm'}
                whiteSpace={'nowrap'}
                color={'black'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'blackAlpha.100',
                }}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

export const MobileNav = ({ navItems, isOpen }) => {
  if (!isOpen) return null

  return (
    <Stack
      p={4}
      display={{ md: 'none' }}
      zIndex={9999}
      pos='fixed'
      top='60px'
      w={'full'}
      bg={'white'}
      minH={'calc(100vh - 60px)'}
      css={{
        backdropFilter: 'saturate(180%) blur(5px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}
