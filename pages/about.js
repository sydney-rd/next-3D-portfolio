import { Box, Link, VStack } from '@chakra-ui/react'
import { OrbitControls, Sky, Stars, Html } from '@react-three/drei'
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
        <Html fullscreen transform></Html>
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
          pointerEvents: 'none' // Disable pointer events on the container box
        }}
      >
        <Box
          flex="2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          pointerEvents="auto"
        >
          Events &rarr; Fullstack Developer
        </Box>
      </Box>
    </Box>
  )
}
