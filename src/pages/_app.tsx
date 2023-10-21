import { AppProps } from 'next/app'
import { ChakraProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme(withDefaultColorScheme({
    colorScheme: 'green',
    components: ['Button', 'Badge'],
  }),
  )
  return <ChakraProvider theme={
    theme
  }><>
      <Head>
        <meta name="application-name" content="Quest for Nature" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="QN" />
        <meta name="description" content="#SustainabilityTomorrow" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Component {...pageProps} />
    </>
  </ChakraProvider>
}

export default MyApp
