import React from 'react'
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Layout from '../components/layouts/main'
import '../styles.css'

const Website = ({ Component, pageProps, router }) => {
  const pageTransition = {
    initial: {
      opacity: 0,
      x: '-50%',
    },
    animate: {
      opacity: 1,
      x: '0%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      x: '50%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <ChakraProvider>
      <Box
        as={motion.div}
        key={router.route}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </Box>
    </ChakraProvider>
  )
}

export default Website
