import React from 'react'
import { motion } from 'framer-motion'
import { Box, Text } from '@chakra-ui/react'

const Title = () => {
  return (
    <Box placeItems="center" textAlign="center">
      <Box display="flex" flexDirection="column" paddingTop="12rem" fontSize="2rem"> 
        <motion.span
          animate={{ color: ['#DF8453', '#3D8DAE', '#E4A9A8'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Text color="var(--color-1)" fontFamily="Ailerons">
            SYDNEY | DAVID
          </Text>
        </motion.span>
        <motion.span
          animate={{ color: ['#DBAD4A', '#ACCFCB', '#17494D'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Text color="var(--color-2)" fontFamily="Ailerons">
            SOFTWARE
          </Text>
        </motion.span>
        <motion.span
          animate={{ color: ['#ACCFCB', '#E4A9A8', '#ACCFCB'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Text color="var(--color-3)" fontFamily="Ailerons">
            DEVELOPER
          </Text>
        </motion.span>
        <motion.span
          animate={{ color: ['#3D8DAE', '#DF8453', '#E4A9A8'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Text color="var(--color-1)" fontFamily="Ailerons" fontSize="3rem">
            ENTER
          </Text>
        </motion.span>
      </Box>
    </Box>
  )
}

export default Title
