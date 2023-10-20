import { AppProps } from 'next/app'
import { ChakraProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme(withDefaultColorScheme({
    colorScheme: 'green',
    components: ['Button', 'Badge'],
  }),
  )
  return <ChakraProvider theme={
    theme
  }><Component {...pageProps} /></ChakraProvider>
}

export default MyApp
