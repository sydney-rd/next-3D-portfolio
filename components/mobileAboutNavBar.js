import React, { useState } from 'react'
import { Box, VStack, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const iconStyle = {
  fontSize: '.9rem',
  cursor: 'pointer',
  color: 'white',
  userSelect: 'none'
}

export default function MobileAboutNavBar() {
  const navBarStyle = {
    color: 'white',
    whiteSpace: 'pre',
    WebkitTextStroke: '1px purple',
    transition: 'color 0.3s',
    fontSize: '.6rem',
    fontWeight: 'bold',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    filter: 'brightness(150%)',
    transitionDelay: '0.8s',
    userSelect: 'none'
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <div>
      <Box position="fixed" zIndex="1">
        <Box
          as={IconButton}
          icon={<HamburgerIcon />}
          onClick={handleToggleDrawer}
          display={['block', 'block', 'none']} // Hide the icon on medium and larger screens
          aria-label="Open mobile menu"
          variant="ghost"
          size="lg"
          left="22rem"
          bg="transparent"
          _active={{ bg: 'transparent' }}
          _hover={{ bg: 'transparent' }}
          _focus={{ boxShadow: 'none' }}
          _visited={{ boxShadow: 'none' }}
          _focusVisible={{ boxShadow: 'none' }}
          color="white"
        />

        <VStack
          display={isDrawerOpen ? 'flex' : 'none'}
          spacing={8}
          flexDirection="row"
          position="absolute"
          justifyContent="flex-start"
          top="10rem"
          left="15.2rem"
          bg="transparent"
          zIndex="2"
          transform="rotate(90deg)"
        >
          <Link href="/about" style={navBarStyle}>
            ABOUT
          </Link>
          <Link href="/projectPage" style={navBarStyle}>
            PROJECTS
          </Link>
          <div>
            <a
              href="/assets/Sydney-David-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={navBarStyle}
            >
              RESUME
            </a>
          </div>
        </VStack>
      </Box>

      {/* Social links */}
      <VStack
        display={isDrawerOpen ? 'flex' : 'none'}
        spacing={6}
        flexDirection="row"
        position="absolute"
        justifyContent="flex-start"
        top="22rem"
        left="18.7rem"
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
    </div>
  )
}
