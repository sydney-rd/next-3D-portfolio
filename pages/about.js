import React from 'react'
import { Box } from '@chakra-ui/react'
import { OrbitControls, Sky, Stars } from '@react-three/drei'
// import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import AboutNavbar from '../components/aboutNavbar'

// make links open to a new tab
export default function About() {
  return (
    <Box position="relative" height="100vh">
      <AboutNavbar />
      <Canvas
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
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '4',
          pointerEvents: 'none'
        }}
      >
        <Box fontFamily="Ailerons" fontSize="50" color="white">
          Events &rarr; Fullstack Developer
        </Box>
        <Box
          color="white" // Set the text color to white
          fontSize="18"
          fontFamily="Verdana, Geneva, Tahoma, sans-serif"
          paddingTop="5"
          maxW="40rem"
        >
          Welcome, my name is Sydney. I am a fullstack developer from NYC.
          Welcome, my name is Sydney. I am a fullstack developer from NYC.
          Welcome, my name is Sydney. I am a fullstack developer from NYC.
          Welcome, my name is Sydney. I am a fullstack developer from NYC.
          Welcome, my name is Sydney. I am a fullstack developer from NYC.
          Welcome, my name is Sydney. I am a fullstack developer from NYC.

        </Box>
      </Box>
    </Box>
  )
}
