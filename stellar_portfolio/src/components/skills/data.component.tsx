'use client';

import { useInView } from 'react-intersection-observer';
import { MotionDiv } from '../motion/div.component';
import Image from 'next/image';

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

export const SkillData = ({ src, index, height, width }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <MotionDiv
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image src={src} width={width} height={height} alt="skill image" />
    </MotionDiv>
  );
};
