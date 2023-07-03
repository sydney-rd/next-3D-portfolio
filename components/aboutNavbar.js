import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import NavBar from './navbar'
import { motion } from 'framer-motion';

export default function AboutNavbar() {
  const navBarStyle = {
    color: 'white',
    whiteSpace: 'pre',
    WebkitTextStroke: `1px purple`,
    transition: 'color 0.3s',
    fontSize: '.7rem',
    fontWeight: 'bold',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    filter: 'brightness(150%)',
    transitionDelay: '1s'
  }

  const iconStyle = {
    fontSize: '1.1rem',
    color: 'white'
  }

  return (
    <Box
      position="fixed"
      top="10"
      right="0"
      h="50vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-end"
      paddingRight={['.2', '4']}
      zIndex="1"
    >
      <NavBar />
      <VStack align="flex-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box pr="6" pt="96">
            <a
              href="https://www.linkedin.com/in/sydneydavid/"
              style={navBarStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={iconStyle} />
            </a>
          </Box>
          <Box pr="6" pt="8">
            <a
              href="https://github.com/sydney-rd"
              style={navBarStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={iconStyle} />
            </a>
          </Box>
          <Box pr="6" pt="8">
            <a
              href="mailto:sydneydavid56@gmail.com"
              style={navBarStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope style={iconStyle} />
            </a>
          </Box>
        </motion.div>
      </VStack>
    </Box>
  )
}

