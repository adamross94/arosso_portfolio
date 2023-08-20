/* imports various modules, including React, components and hooks from @react-three/fiber and @react-three/drei, 
as well as external libraries. */

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

/* Defines a Stars component that represents a group of stars. It generates random star positions within a sphere 
and uses the useFrame hook to apply a rotation animation to the stars. */

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  /* The component returns a <group> element, which contains the stars. Inside the group, a <Points> component 
  renders the star points. The positions prop is set to the generated sphere positions, and other attributes 
  like stride, frustumCulled, and props are passed. A <PointMaterial> component is used to define the appearance 
  of the stars, including color, size, transparency, and depth behavior. */

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

/* Defines a StarsCanvas component that wraps the 3D scene in a <Canvas> component from @react-three/fiber.
The <Canvas> component sets up the 3D scene properties, including the camera's position. Inside the <Canvas>, 
a <Suspense> component is used to handle the asynchronous loading of 3D assets. It renders the Stars component,
which displays the group of stars. During asset loading, a fallback of null is provided to the <Suspense> component. */

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;