import React from 'react'
import { motion } from 'framer-motion'
import { Box, Text, useBreakpointValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const AnimatedText = ({ text, colors }) => {
  return (
    <motion.span
      animate={{ color: colors }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <Text fontFamily="Ailerons">{text}</Text>
    </motion.span>
  )
}

const Title = () => {
  const router = useRouter()

  const navigateToProjectPage = () => {
    router.push('/projectPage')
  }

  const responsiveStyles = useBreakpointValue({
    base: {
      textFontSize: '1.2rem',
      enterFontSize: '2.5rem'
    },
    md: {
      textFontSize: '1.7rem',
      enterFontSize: '3rem'
    }
  })

  return (
    <Box placeItems="center" textAlign="center" justifyContent="center">
      <Box
        display="flex"
        flexDirection="column"
        paddingTop="15rem"
        fontSize={responsiveStyles?.textFontSize}
        userSelect='none'
        filter='brightness(150%)'
      >
        <Box display="flex" justifyContent="center" paddingRight="1rem">
          <AnimatedText
            text="SYDNEY"
            colors={['#DE91BE', '#4B0090', '#DE91BE']}
          />
          <Box marginX=".3rem"></Box>
          <AnimatedText
            text="DAVID"
            colors={['#DE91BE', '#4B0090', '#DE91BE']}
          />
        </Box>

        <Box display="flex" justifyContent="center">
          <AnimatedText
            text="SOFTWARE"
            colors={['#4B0090', '#DE91BE', '#4B0090']}
          />
          <Box marginX=".7rem">
            <AnimatedText
              text="DEVELOPER"
              colors={['#4B0090', '#DE91BE', '#4B0090']}
            />
          </Box>
        </Box>

        <Text
          fontFamily="Ailerons"
          userSelect='none'
          color="white"
          fontSize={responsiveStyles?.enterFontSize}
          cursor="crosshair"
          paddingRight="1rem"
          onClick={navigateToProjectPage}
        >
          ENTER
        </Text>
      </Box>
    </Box>
  )
}

export default Title
