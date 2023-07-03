import React, { useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Layout from '../components/layouts/main'
import "../styles.css"
import LoadingScreen from '../components/loadingScreen'

const Website = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
    }

    const handleComplete = () => {
      setIsLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [])

  return (
    <ChakraProvider>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      )}
    </ChakraProvider>
  )
}

export default Website
