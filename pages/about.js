import React from 'react'
import { Box } from '@chakra-ui/react'
import { OrbitControls, Sky, Stars } from '@react-three/drei'
// import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import Title from '../components/title'
import AboutNavbar from '../components/aboutNavbar'

// make links open to a new tab
export default function About() {
  return (
    <Box position="relative" height="100vh">
      <AboutNavbar />
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <OrbitControls autoRotate autoRotateSpeed={0.3} maxDistance={60} />
        <Sky sunPosition={[0, 0, 0]} />
        <Stars fade />
      </Canvas>
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: 'center',
          userSelect:"none"

        }}
      >
        <Box letterSpacing="10px" fontWeight="bold" fontFamily="Ailerons" fontSize="65" textShadow="1px 1px 3px pink" color="white">
          Events &rarr; Fullstack Developer
        </Box>
        <Box
          color="white" // Set the text color to white
          fontSize="18"
          fontFamily="Verdana, Geneva, Tahoma, sans-serif"
          paddingTop="10"
          maxW="38rem"
          textAlign="center"

        >
          Welcome, my name is Sydney and I am a fullstack developer from NYC.
          My journey began with a simple HTML/CSS tutorial, and since I have
          
   
        </Box>
      </Box>
    </Box>
  )
}
