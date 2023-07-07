import React from 'react'
import { Box, Link, VStack } from '@chakra-ui/react'
import { OrbitControls, Sky, Stars, Html } from '@react-three/drei'
import { motion } from "framer-motion"
import { Canvas } from '@react-three/fiber';
import AboutNavbar from "../components/aboutNavbar"

// make links open to a new tab
export default function About() {
  return (
    <Box position="relative" height="100vh">
      <AboutNavbar />
      <Canvas
        camera={{ position: [0, 5, 30] }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <OrbitControls autoRotate autoRotateSpeed={0.3} maxDistance={60} />
        <Sky sunPosition={[0, 0, 0]} />
        <Stars fade />
      </Canvas>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '4',
          pointerEvents: 'none'
        }}
      >
        <Box
          flex="2"
          fontFamily='Ailerons'
          display="flex"
          fontSize="90"
          pointerEvents="auto"
          color="white"
>
          Events &rarr; Fullstack Developer
        </Box>
        <Box
          flex="1"
          pointerEvents="auto"
          color="white" // Set the text color to white
          fontSize="18"
          fontFamily="Verdana, Geneva, Tahoma, sans-serif"
          >
          W E L C O M E | my name is Sydney. I am a fullstack developer from NYC.
        </Box>
      </Box>
    </Box>
  )
}
