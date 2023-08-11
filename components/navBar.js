import React from 'react'
import { Box, VStack, Image } from '@chakra-ui/react'
import Link from 'next/link'
import Logo from '../public/assets/logo/logo.png'

export default function Navbar() {
  const navBarStyle = {
    color: 'white',
    whiteSpace: 'pre',
    WebkitTextStroke: `1px purple`,
    transition: 'color 0.3s',
    fontSize: '.7rem',
    fontWeight: 'bold',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    filter: 'brightness(150%)',
    transitionDelay: '0.8s',
    userSelect: 'none',
    cursor: 'crosshair'
  }
  return (
    <Box
      position="fixed"
      top="2rem"
      right="0"
      h="50vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-end"
      paddingRight="4"
      zIndex="1"
    >
      <Link href="/" passHref>
        <Image
          src={Logo.src}
          alt="Logo"
          w="90px"
          style={{ cursor: 'crosshair' }}
        />
      </Link>
      <VStack spacing={20} align="flex-end">
        <Box pr=".6rem" pt="2">
          <Box transform="rotate(90deg)" whiteSpace="pre">
            <Link href="/about" style={navBarStyle}>
              ABOUT
            </Link>
          </Box>
        </Box>
        )
        <Box pt="2">
          <Box transform="rotate(90deg)" whiteSpace="pre">
            <Link href="/projectPage" style={navBarStyle}>
              PROJECTS
            </Link>
          </Box>
        </Box>
        )
        <Box pr="2" pt="4">
          <Box
            className="navBar"
            transform="rotate(90deg)"
            whiteSpace="pre"
            style={navBarStyle}
          >
            <a
              href="/assets/Sydney-David-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={navBarStyle}
            >
              RESUME
            </a>
          </Box>
        </Box>
        )
      </VStack>
    </Box>
  )
}
