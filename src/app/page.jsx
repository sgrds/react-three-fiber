"use client";
import { Canvas } from "@react-three/fiber";
import House from "./house";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import ControlPanel from "./controlPanel";

export default function Home() {
  const [controls, setControls] = useState({ hdri: false, damping: true });
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Canvas
        className="cursor-pointer"
        frameloop="demand"
        camera={{
          position: [-0.02, 0.01, 0],
          fov: 20,
          near: 0.1,
          far: 200,
        }}
      >
        <OrbitControls
          // autoRotate={false}
          enableDamping={controls.damping}
          enableZoom={true}
          maxPolarAngle={Math.PI / 2.02}
          maxDistance={65}
          enablePan={true}
        />
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.8}
          position={[300, 300, 400]}
          angle={0.2}
          penumbra={1}
        />

        <House env={controls.hdri} />

        {/* <axesHelper args={[20]} /> */}
      </Canvas>
      <ControlPanel controls={controls} setControls={setControls} />
    </div>
  );
}
