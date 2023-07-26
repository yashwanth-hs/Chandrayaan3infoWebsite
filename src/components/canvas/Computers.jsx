/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computer = ({isMobile}) => {
  const computer = useGLTF("./vikram/scene.gltf");

  return (
    <mesh>
    <hemisphereLight intensity={0.5} groundColor='black' />
    
    <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
    />
    <pointLight intensity={1} />
    <primitive object={computer.scene} scale={ isMobile ? 1.15 : 1.2} 
              position-y={isMobile ? -130.23 :-130.23} rotation-y={0}
              position-x={240}
               />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(('max-width: 500px'));

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])

  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 65,
        near:10,
        
        position: [150, 200,205],
      }}
      
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
         
        />
        <Computer  isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
    };

  export default ComputersCanvas;