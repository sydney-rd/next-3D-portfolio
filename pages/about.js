import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { OrbitControls, Sky, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import AboutNavbar from '../components/aboutNavbar'

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
          top: '50%',
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
          letterSpacing="1rem"
          fontWeight="bold"
          fontFamily="Ailerons"
          fontSize="3.5rem"
          textShadow="1px 1px 3px pink"
          color="white"
          textAlign="center"
        >
          Events &rarr; Fullstack Developer
        </Box>
        <Text
          color="white"
          fontSize="15"
          fontFamily="Verdana, Geneva, Tahoma, sans-serif"
          paddingTop="10"
          maxW="40rem"
          textAlign="center"
        >
          Hi! My name is Sydney and I am a fullstack developer from NYC. My
          journey began with a simple HTML/CSS tutorial. Since that moment - I
          challenged myself to transition my career path to the ever-changing
          field of tech. I took this path because I wanted to continuously learn
          new things every day.
          <br />
          <br />
          A little bit about my background...I have worked in hospitality,
          planning, creating, and executing events for companies like WeWork and
          ViacomCBS (Comedy Central, Paramount Network, TVLand). I was able to
          travel around the US and work on activations such as the World Pride
          Parade, comic-con, ComplexCon, festivals, conventions, and more.
          <br />
          <br />
          While you will find me coding day to day, I also have a passion for
          cars, maps, geography, and travel. I am also a cat and pitbull
          advocate!
          <br />
          <br />
        </Text>
        <Text fontSize="25" fontFamily="Ailerons" color="white" fontWeight="bold">
          What you'll find me coding in
        </Text>
        <Text
          color="white"
          fontSize="15"
          fontFamily="Verdana, Geneva, Tahoma, sans-serif"
          maxW="40rem"
          textAlign="center"
          paddingTop=".8rem"
        >
          <strong>Languages</strong> <br /> JavaScript, Python, C/C++
          <br />
          <br />
         <strong>Databases</strong> <br /> MongoDB, SQL
          <br />
          <br />
          <strong>Web Dev</strong> <br /> React, Next.js, Express, React-Fiber-Three, HTML, <br /> CSS,
          Tailwind, Chakra-UI, Framer Motion
        </Text>
      </Box>
    </Box>
  )
}
