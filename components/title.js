import React from 'react'
import { motion } from 'framer-motion'
import { Box, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Title = () => {
  const router = useRouter();

  const navigateToProjectPage = () => {
    router.push('/projectPage') 
  }
  return (
    <Box placeItems="center" textAlign="center">
      <Box
        display="flex"
        flexDirection="column"
        paddingTop="12rem"
        fontSize="2rem"
      >
        <motion.span
          animate={{ color: ['#DF8453', '#3D8DAE', '#E4A9A8'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Text fontFamily="Ailerons">SYDNEY</Text>
        </motion.span>
        <motion.span
          animate={{ color: ['#DBAD4A', '#ACCFCB', '#17494D'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Text fontSize="2.5rem" fontFamily="Ailerons">|</Text>
        </motion.span>
        <motion.span
          animate={{ color: ['#ACCFCB', '#E4A9A8', '#ACCFCB'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Text fontFamily="Ailerons">DAVID</Text>
        </motion.span>
        <motion.span
          animate={{ color: ['#ACCFCB', '#E4A9A8', '#ACCFCB'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Text fontFamily="Ailerons">SOFTWARE</Text>
        </motion.span>
        <motion.span
          animate={{ color: ['#ACCFCB', '#E4A9A8', '#ACCFCB'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Text fontFamily="Ailerons">DEVELOPER</Text>
        </motion.span>
        <motion.span
          animate={{ color: ['#3D8DAE', '#DF8453', '#E4A9A8'] }}
          transition={{ duration: 4, repeat: Infinity }}
          onClick={navigateToProjectPage}
        >
          <Text fontFamily="Ailerons" fontSize="3rem" cursor="pointer">
            ENTER
          </Text>
        </motion.span>
      </Box>
    </Box>
  )
}

export default Title
