import React from 'react'
import { Box } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import Navbar from './navbar'
import { motion } from 'framer-motion';

export default function AboutNavbar() {
  const iconStyle = {
    fontSize: '1.1rem',
    color: 'white',
    cursor: "pointer",
  }

  return (
    <Box
      position="fixed"
      top="10"
      right="0"
      h="50vh"
      display="flex"
      flexDirection="column"
      paddingRight={['.2', '4']}
      zIndex="1"
    >
      <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Box pr="7" pt="96">
            <Box pt="6">
            <a
              href="https://www.linkedin.com/in/sydneydavid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={iconStyle} />
            </a>
            </Box>
          </Box>
          <Box pt="8">
            <a
              href="https://github.com/sydney-rd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={iconStyle} />
            </a>
          </Box>
          <Box pt="8">
            <a
              href="mailto:sydneydavid56@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope style={iconStyle} />
            </a>
          </Box>
        </motion.div>
    </Box>
  )
}

