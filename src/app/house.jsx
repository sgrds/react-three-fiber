"use client";

// import * as THREE from "three";
import { useGLTF, Environment, Stage } from "@react-three/drei";

const House = ({ env }) => {
  const house = useGLTF(
    "https://qpzsjmjzjfmluroetwtm.supabase.co/storage/v1/object/public/sagarcodes/3d/villa/scene.gltf",
  );

  return (
    <>
      <Stage>
        {/* <group dispose={null}> */}
        <primitive
          //   position={new THREE.Vector3(0, 0, 0)}
          object={house.scene}
          scale={2}
        />
        {/* </group> */}
      </Stage>
      {env === true && (
        <Environment
          files="https://qpzsjmjzjfmluroetwtm.supabase.co/storage/v1/object/public/sagarcodes/3d/farm_sunset_1k.exr"
          ground={{ height: 50, radius: 500, scale: 80 }}
        />
      )}
    </>
  );
};

export default House;
