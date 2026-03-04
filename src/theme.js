import { extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/theme'
import '@fontsource-variable/inter'

// color mode config
const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const fonts = {
  body: "'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  heading: "'Champ Black', 'Inter Variable', 'Work Sans', system-ui, sans-serif",
}

export const customTheme = extendTheme(
  {
    colors: { ...theme.colors, brand: theme.colors.blue },
    config: config,
    fonts: fonts,
    styles: {
      global: {
        '@font-face': {
          fontFamily: 'Champ Black',
          src: "url('/fonts/Champ-Black.otf') format('opentype')",
          fontWeight: '900',
          fontStyle: 'normal',
          fontDisplay: 'swap',
        },
        html: { scrollBehavior: 'smooth' },
      },
    },
  },
  theme,
)
