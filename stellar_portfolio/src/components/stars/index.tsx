'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { StarBackground } from './background.component';

export const Stars = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
