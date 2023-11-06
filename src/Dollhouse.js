import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./eja.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default function Dollhouse() {
  return (
    <Canvas camera={{ fov: 75, position: [0, 0, 2] }}>
      <Suspense fallback={null}>
        <Model />
        <OrbitControls />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}
