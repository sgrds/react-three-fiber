"use client";
import { useGLTF, Environment, Stage, Html } from "@react-three/drei";

const House = ({ env }) => {
  const house = useGLTF(
    "https://qpzsjmjzjfmluroetwtm.supabase.co/storage/v1/object/public/sagarcodes/3d/villa/scene.gltf",
  );

  return (
    <>
      <group>
        <Html position={[10, 2, 0]} center>
          <h1 className="w-auto rounded-full bg-gray-700 px-8 py-4 text-white opacity-75">
            Assignment Done..👍✨
          </h1>
        </Html>
        <Stage environment="sunset">
          <primitive position={[0, -20, 0]} object={house.scene} scale={2} />
        </Stage>
      </group>
      {env === true && (
        <Environment
          files="https://qpzsjmjzjfmluroetwtm.supabase.co/storage/v1/object/public/sagarcodes/3d/farm_sunset_1k.exr"
          ground={{
            height: 32,
            radius: 340,
            scale: 100,
          }}
        />
      )}
    </>
  );
};

export default House;
