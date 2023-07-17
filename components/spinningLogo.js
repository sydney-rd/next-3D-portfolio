// components/spinningLogo.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Logo from '../public/assets/logo/logo.png';
import { useBreakpointValue } from '@chakra-ui/react';

const SpinningLogo = () => {

  const responsiveStyles = useBreakpointValue({
    base: {
      logoPaddingRight: '5rem',
      logoWidth: '80%',
      logoHeight: '80%',
      logoPaddingBottom: '5rem'
    },
    md: {
      logoPaddingRight: '3rem',
      logoWidth: '50%',
      logoHeight: '40%',
      logoPaddingBottom: '1rem'

    }
  })

  return (
    <Canvas>
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
            style={{ width: responsiveStyles?.logoWidth, height: responsiveStyles?.logoHeight, paddingRight: responsiveStyles?.logoPaddingRight, paddingBottom: responsiveStyles?.logoPaddingBottom }}
          />
        </div>
      </Html>
    </Canvas>
  );
};

export default SpinningLogo;

