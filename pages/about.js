import React from 'react'
import { Box, Divider } from '@chakra-ui/react'
import { OrbitControls, Sky, Stars } from '@react-three/drei'
// import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
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
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          userSelect: 'none'
        }}
      >
        <Box
          letterSpacing="10px"
          fontWeight="bold"
          fontFamily="Ailerons"
          fontSize="65"
          textShadow="1px 1px 3px pink"
          color="white"
        >
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
          Thank you for visiting!
          
          My name is Sydney and I am a fullstack developer from NYC. My
          journey began with a simple HTML/CSS tutorial. Since that moment - I
          challenged myself to transition my career path to the ever-changing
          field of tech. I took this path to continously learn new things everyday.
          
          A little bit about my background...I have worked in
          hospitality and events, planning, creating, and executing events for companies like
          WeWork and ViacomCBS (Comedy Central, Paramount Network, TVLand). I was able to travel around the 
          US and work on activations such as the World Pride Parade, comic-con, ComplexCon, festivals, conventions, and more. 

          While you will find me coding day to day, I also have a passion for cars, maps, geography, 
          and travel. 

          What you'll find me coding in
          <Divider />
          React, Nextjs, JavaScript, Python, C++
        </Box>
      </Box>
    </Box>
  )
}
