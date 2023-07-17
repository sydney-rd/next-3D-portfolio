// components/spinningLogo.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Logo from '../public/assets/logo/logo.png';
import { useBreakpointValue } from '@chakra-ui/react';

const SpinningLogo = () => {

  const responsiveStyles = useBreakpointValue({
    base: {
      logoPaddingRight: '2rem'
    },
    md: {
      logoPaddingRight: '3rem'
    }
  })

  return (
    <Canvas gl={{ style: { width: '100%', height: '70vh' } }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls autoRotate />
      <Html position={[0, 0, 0]} transform>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            userSelect: 'none',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={Logo.src}
            alt='SDLogo'
            style={{ width: '60%', height: '70%', paddingRight: responsiveStyles?.logoPaddingRight }}
          />
        </div>
      </Html>
    </Canvas>
  );
};

export default SpinningLogo;

