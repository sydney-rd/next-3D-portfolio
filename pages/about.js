import React from 'react'
import { Box, Text, useBreakpointValue } from '@chakra-ui/react'
import { OrbitControls, Sky, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import AboutNavbar from '../components/aboutNavbar'

export default function About() {
  const responsiveStyles = useBreakpointValue({
    base: {
      titleFontSize: '1.3rem',
      textFontSize: '.7rem',
      maxW: '13rem',
      secTitleFontSize: '1rem',
      codeDescriptionFontSize: '.7rem',
      codePaddingTop: '.7rem',
    },
    md: {
      titleFontSize: '3.5rem',
      textFontSize: '.9rem',
      maxW: '35rem',
      secTitleFontSize: '2rem',
      codeDescriptionFontSize: '.9rem',
      codePaddingTop: '1rem',

    }
  })

  return (
    <Box position='relative' height='100vh'>
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
          letterSpacing='1rem'
          fontWeight='bold'
          fontFamily='Ailerons'
          fontSize={responsiveStyles?.titleFontSize}
          textShadow='1px 2px 3px pink'
          color='white'
          textAlign='center'
          position='fixed'
          top='1rem'
     
        >
          Events &rarr; Software Developer
        </Box>
        <Box
          color='white'
          fontSize={responsiveStyles?.textFontSize}
          fontFamily='Verdana, Geneva, Tahoma, sans-serif'
          paddingTop='5rem'
          maxW={responsiveStyles?.maxW}
          textAlign='center'
        >
          <Box
            overflow='auto'
            maxHeight={{ base: '40vh', md: 'auto' }}
            paddingRight={{ base: '1rem', md: '0' }}
            marginRight={{ base: '-1rem', md: '0' }}
          >
            <Text>
              Hi - my name is Sydney! I am a Software Developer from NYC. My journey began with a simple HTML/CSS tutorial. Since that moment, I challenged myself with a career transition to the ever-changing field of tech. I took this path because I wanted to continuously learn new things every day.
              <br />
              <br />
              A little bit about my background...I have worked in Events for companies like WeWork and ViacomCBS (Comedy Central, Paramount Network, TVLand). I was able to travel around the US and work on activations such as the World Pride Parade, comic-con, ComplexCon, festivals, conventions, and more.
              While you will find me coding day to day, I also have a passion for cars, maps, geography, and travel. I am also a cat and pitbull advocate!
              <br />
              <br />
            </Text>
          </Box>
        </Box>
        <Text
          fontSize={responsiveStyles?.secTitleFontSize}
          fontFamily="Ailerons"
          color="white"
          fontWeight="bold"
          textShadow="1px 2px 3px pink"
          paddingTop="2rem"
        >
          What you&apos;ll find me coding in
        </Text>
        <Text
          color='white'
          fontSize={responsiveStyles?.codeDescriptionFontSize}
          fontFamily='verdana, Geneva, Tahoma, sans-serif'
          maxW='40rem'
          textAlign='center'
          paddingTop={responsiveStyles?.codePaddingTop}
        >
          <strong>Languages</strong> <br /> JavaScript, Python, C/C++
          <br />
          <br />
          <strong>Databases</strong> <br /> MongoDB, SQL
          <br />
          <br />
          <strong>Web Dev</strong> <br /> React, Next.js, Express, React-Fiber-Three, HTML, <br /> CSS, Tailwind, Chakra-UI, Framer Motion
        </Text>
      </Box>
    </Box>
  )
}
