import React, { useEffect, useState } from 'react'
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import '../styles.css'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
