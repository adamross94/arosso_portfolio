/* Imports various modules, including React, components and hooks from @react-three/fiber 
and @react-three/drei, and a custom loader component. */ 

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

/* Defines an Earth component that represents a 3D model of the Earth. It uses the useGLTF 
hook to load a GLTF model of the Earth. */

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

/* The component returns a primitive element, which renders the loaded Earth model. The scale, 
position-y, and rotation-y attributes are set to control the appearance and position of the Earth 
within the scene. */  

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

/* Defines an EarthCanvas component that wraps the 3D scene in a Canvas component from @react-three/fiber.
The Canvas component sets up the 3D scene properties, including camera settings such as field of view, 
near and far planes, and position. Inside the Canvas, a Suspense component is used to handle the asynchronous
loading of 3D assets. It renders an OrbitControls component for interaction, the Earth component to display 
the 3D Earth model, and the Preload component to preload assets in the background. During asset loading, a 
fallback loader (CanvasLoader) is displayed. */

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;