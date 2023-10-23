"use client";
import { Canvas } from "@react-three/fiber";
import House from "./house";
import { Stats, OrbitControls, CameraControls } from "@react-three/drei";
import { useState } from "react";
import ControlPannel from "./controlPannel";

export default function Home() {
  const [controls, setControls] = useState({ hdri: false });
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Canvas
        className="cursor-pointer"
        frameloop="demand"
        camera={{ position: [0, 10, -50], fov: 30, near: 0.1, far: 200 }}
      >
        {/* <OrbitControls
          autoRotate={false}
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        /> */}
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.8}
          position={[300, 300, 400]}
          angle={0.2}
          penumbra={1}
        />
        <CameraControls
          truckSpeed={0}
          dollySpeed={0}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
        <House env={controls.hdri} />

        <axesHelper args={[20]} />
        <Stats />
      </Canvas>
      <ControlPannel
        checked={controls.hdri}
        onChange={() => setControls({ ...controls, hdri: !controls.hdri })}
      />
    </div>
  );
}
