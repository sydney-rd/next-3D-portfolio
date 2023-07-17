import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Logo from '../public/assets/logo/logo.png'

const SpinningLogo = () => {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls autoRotate />
      <Html position={[0, 0, 0]} transform>
        <div style={{ width: '100%', height: '50vh', display: 'flex', userSelect: 'none', paddingBottom: '8rem', paddingRight: '3.5rem', justifyContent: 'center', alignItems: 'center', userSelect: 'none' }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: '80%', height: '70%' }}
          />
        </div>
      </Html>
    </Canvas>
  );
};

export default SpinningLogo;
