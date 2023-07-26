/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Rocket = ({isMobile}) => {
  const rocket = useGLTF("./pragyan_rover/scene.gltf");

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
    <primitive object={rocket.scene} scale={ isMobile ? 1.15 : 1.15} 
              position-y={isMobile ? -130.23 :-130.23} rotation-y={0}
              position-x={220}
               />
    </mesh>
  );
};

const RocketsCanvas = () => {
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
        <Rocket  isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
    };

  export default RocketsCanvas;