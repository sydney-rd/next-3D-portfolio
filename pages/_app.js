import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Layout from '../components/layouts/main'
import '../styles.css'

const Website = ({ Component, pageProps }) => {
  const router = useRouter()

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
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </Box>
    </ChakraProvider>
  )
}

export default Website
