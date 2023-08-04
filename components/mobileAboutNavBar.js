import React from 'react'
import { Box, VStack, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Logo from '../public/assets/logo/logo.png'

const iconStyle = {
  fontSize: '.9rem',
  cursor: 'pointer',
  color: 'white',
  userSelect: 'none'
}

export default function MobileAboutNavBar() {
  return (
    <div>
      <Box position="absolute" zIndex="1" top=".5rem" left="19rem">
        <Link href="/" passHref>
          <Image
            src={Logo.src}
            alt="Logo"
            w="100px"
            style={{ cursor: 'crosshair' }}
          />
        </Link>
      </Box>
      <VStack
        spacing={6}
        flexDirection="row"
        position="absolute"
        justifyContent="flex-start"
        top="7.5rem"
        left="19rem"
        bg="transparent"
        zIndex="2"
        transform="rotate(90deg)"
      >
        <a
          href="https://www.linkedin.com/in/sydneydavid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.span whileHover={{ color: 'pink' }} style={iconStyle}>
            <FaLinkedin />
          </motion.span>
        </a>
        <a
          href="https://github.com/sydney-rd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.span whileHover={{ color: 'pink' }} style={iconStyle}>
            <FaGithub />
          </motion.span>
        </a>
        <a
          href="mailto:sydneydavid56@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.span whileHover={{ color: 'pink' }} style={iconStyle}>
            <FaEnvelope />
          </motion.span>
        </a>
      </VStack>

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        style={iconStyle}
      ></motion.div>
    </div>
  )
}
