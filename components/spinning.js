import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useLoader, useFrame } from '@react-three/fiber'

export const Planet = ({
  textureUrl,
  size,
  position,

}) => {
  const texture = useLoader(THREE.TextureLoader, textureUrl)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1, 1)
  texture.anisotropy = 16
  const planetMaterial = new THREE.MeshPhongMaterial({ map: texture })

  const meshRef = useRef()

  return (
    <mesh ref={meshRef} position={position} material={planetMaterial}>
      <sphereGeometry args={[size, 64, 64]} />
    </mesh>
  )
}
