'use client';

import { useRef, useState } from 'react';
//@ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';

const StarBackground = (props: any) => {
  const ref = useRef({ rotation: { x: 0, y: 0 } });
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="$fff"
          size={0.002}
          sizeAttenuation={true}
          dethWrite={true}
        />
      </Points>
    </group>
  );
};
