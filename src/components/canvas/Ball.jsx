/*
A React component that renders a 3D ball object using the @react-three/fiber and 
@react-three/drei libraries in a canvas. The ball object has various properties, 
such as rotation, shading, and texture, that are set using props.
*/

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

/*
The Ball component is a child component of the BallCanvas component, and it represents 
the 3D ball object with its properties. It uses the useTexture hook from @react-three/drei 
to load a texture image for the ball's Decal component, which is applied to the ball's surface.
*/

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

/*
The BallCanvas component is the main component that renders the canvas using the 
Canvas component from @react-three/fiber. It wraps the Ball component inside a 
Suspense component for handling asynchronous loading of the texture image, and 
also includes an OrbitControls component for enabling user interaction with the 
3D scene. Additionally, it uses a Preload component from @react-three/drei to 
preload all assets in the scene for better performance.
*/

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

/*
The BallCanvas component is exported as the default export, which means it can be 
imported and used as a component in other parts of the application.
*/

export default BallCanvas;