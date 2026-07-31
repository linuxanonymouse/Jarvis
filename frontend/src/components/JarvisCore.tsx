"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function CoreElement() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
      <MeshDistortMaterial
        color="#00d4ff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
    </Sphere>
  );
}

export default function JarvisCore() {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center relative">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <CoreElement />
        </Canvas>
      </div>
      <div className="relative z-10 pointer-events-none text-center">
        <h2 className="text-3xl font-bold tracking-widest text-accent uppercase filter drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]">Core Online</h2>
        <p className="text-accent/60 tracking-widest text-sm mt-2">SYSTEM STABLE</p>
      </div>
    </div>
  );
}
