import React from 'react'
import { Box, Flex, ChakraProvider } from '@chakra-ui/react'
import { Html } from '@react-three/drei'
import { Link } from 'react-scroll'
import { Canvas } from '@react-three/fiber'
import { ChevronDownIcon as Down } from '@chakra-ui/icons'
import Planet from '../components/spinning'
import ProjectPage from './projectPage' // Update the file path and name

export default function Index() {
  return (
    <ChakraProvider>
      <Box
        sx={{
          bg: 'black',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)'
        }}
      >
        <Canvas camera={{ position: [0, 5, 30] }}>
        <Planet />
          <Html fullscreen>
            <Flex
              fontFamily="Ailerons"
              fontSize="2rem"
              align="center"
              justify="center"
              color="purple"
              fontWeight="bold"
              //  textShadow="0px 0px 2px white"
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
            >
              sydney-rd | software developer
            </Flex>
          </Html>
        </Canvas>
        <Link to="/projectPage" smooth duration={500} ignoreCancelEvents>
          <Box
            position="fixed"
            bottom="2rem"
            right="1rem"
            zIndex={999}
            fontSize="2rem"
            fontWeight="bold"
            color="white"
            borderRadius="50%"
            padding="0.5rem"
            cursor="pointer"
          >
            <Down />
          </Box>
        </Link>
      </Box>
    </ChakraProvider>
  )
}
