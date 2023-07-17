import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

const SpinningLogo = () => {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Html position={[0, 0, 0]} transform>
        <div style={{ width: '100%', height: '50vh', display: 'flex', paddingBottom: '3rem', paddingRight: '3rem', justifyContent: 'center', alignItems: 'center', userSelect: 'none' }}>
          <img
            src="https://raw.githubusercontent.com/sydney-rd/next_three_portfolio/main/public/assets/SD-1.png?token=GHSAT0AAAAAAB7BNBVYFRLK5QOSYFBYYGGIZFVQXKQ"
            alt="Logo"
            style={{ width: '80%', height: '70%' }}
          />
        </div>
      </Html>
    </Canvas>
  );
};

export default SpinningLogo;
