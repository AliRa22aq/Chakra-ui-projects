import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../Theme'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
      </Head>

    {/* <head>
      <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet" />
      <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet" />
      <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet" />
    </head> */}

    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}

export default MyApp
