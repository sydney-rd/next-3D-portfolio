import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Html } from '@react-three/drei';
import { Link } from 'react-scroll';
import { Canvas } from '@react-three/fiber';
import { ChevronDownIcon as Down } from '@chakra-ui/icons';
import ProjectPage from '../pages/projectPage'; // Update the file path and name

export default function Index() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 5, 30] }}
        style={{ width: '100vw', height: '100vh' }}
      >
        {/* <Sky sunPosition={[0, 0, 0]} />
        <Stars fade /> */}
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
          <Link to="/projectPage" smooth={true} duration={500} ignoreCancelEvents={true}>
            <Box
              position="fixed"
              bottom="2rem"
              right="1rem"
              zIndex={999}
              fontSize="2rem"
              fontWeight="bold"
              color="white"
              backgroundColor="black"
              borderRadius="50%"
              padding="0.5rem"
              cursor="pointer"
            >
              <Down />
            </Box>
          </Link>
      <Box id="projectPage">
        <ProjectPage />
      </Box>
    </>
  );
}
