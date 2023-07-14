import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import Link from 'next/link'

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
    userSelect: "none"
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
      <VStack spacing={20} align="flex-end">
        <Box pr="3.5" pt="12">
          <Box transform="rotate(90deg)" whiteSpace="pre">
            <Link href="/about" style={navBarStyle}>
              ABOUT
            </Link>
          </Box>
        </Box>
        )
        <Box p="1" pt="2">
          <Box transform="rotate(90deg)" whiteSpace="pre">
            <Link href="/projectPage" style={navBarStyle}>
              PROJECTS
            </Link>
          </Box>
        </Box>
        )
        <Box p="3"> 
          <Box
            className="navBar"
            transform="rotate(90deg)"
            whiteSpace="pre"
            style={navBarStyle}
          >
            RESUME
          </Box>
        </Box>
        )
      </VStack>
    </Box>
  )
}