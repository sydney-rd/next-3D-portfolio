import React from 'react'
import { Flex } from '@chakra-ui/react'
import ScrollEffect from '../components/scrollEffect'
import { OrbitControls, Sky, Stars, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function index() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 5, 30] }}
        style={{ width: '100vw', height: '100vh' }}
      >
        {/* <OrbitControls autoRotate autoRotateSpeed={0.3} maxDistance={60} /> */}
        <Sky sunPosition={[0, 0, 0]} />
        <Stars fade />
        <Html fullscreen transform>
          <Flex
            fontFamily="Ailerons"
            WebkitTextStroke="2px"
            WebkitTextStrokeColor="blue"
            align="center"
            justify="center"
            color="red"
            fontSize="3rem"
            fontWeight="bold"
            textShadow="0px 0px 10px white"
          >
            sydney-rd | software developer
          </Flex>
        </Html>
      </Canvas>
          <ScrollEffect currentPage="index" />
    </>
  )
}
