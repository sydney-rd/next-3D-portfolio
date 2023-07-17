import React from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei';
import Logo from '../public/assets/SD-1.png'



const SpinningLogo = () => {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <mesh rotation={[0, 0, 0]}>
        <planeBufferGeometry args={[2, 2]} />
        <meshBasicMaterial>
          <Html position={[0, 0, 0]} transform>
            <div style={{ width: '100%', height: '100%' }}>
              <img src={Logo} alt="Logo" style={{ width: '100%', height: '100%' }} />
            </div>
          </Html>
        </meshBasicMaterial>
      </mesh>
    </Canvas>
  );
};

export default SpinningLogo;
