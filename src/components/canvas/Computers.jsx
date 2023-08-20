/* imports various modules, including React, components and hooks from @react-three/fiber and 
@react-three/drei, and a custom loader component. */

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

/* Defines a Computers component that represents a 3D model of a computer setup. It uses the useGLTF 
hook to load a GLTF model of a computer. */

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

/* The component sets up the lighting for the scene using a hemisphere light, a spot light, and a point light.
The computer model (loaded using useGLTF) is added to the scene as a primitive mesh with specified scale, position, 
and rotation. The position and other properties are adjusted based on whether the screen is considered mobile or not. */

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

/* Defines a ComputersCanvas component that wraps the 3D scene in a Canvas component from @react-three/fiber.
Uses useEffect to detect changes in screen size and set the isMobile state accordingly. It adds and removes 
a media query listener. The Canvas component sets up the 3D scene properties, including camera position and 
field of view. Inside the Canvas, a Suspense component is used to handle the asynchronous loading of 3D assets. 
It renders an OrbitControls component and the Computers component while displaying a fallback loader (CanvasLoader) 
during asset loading. The Preload component is used to preload assets in the background. */

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;