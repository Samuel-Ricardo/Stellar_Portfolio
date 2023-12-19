'use client';

import { useRef, useState } from 'react';
//@ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import { useFrame } from '@react-three/fiber';

const StarBackground = (props: any) => {
  const ref = useRef({ rotation: { x: 0, y: 0 } });
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
};
