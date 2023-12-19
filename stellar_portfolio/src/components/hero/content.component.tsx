import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from '@/utils/motion';
import { MotionDiv } from '../motion/div.component';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { MotionP } from '../motion/p.component';
import { MotionA } from '../motion/a.component';
import Image from 'next/image';

export const HeroContent = () => {
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <MotionDiv
          variants={slideInFromTop}
          className="welcome_box py-[8px] px-[7px] border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="welcome_text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </MotionDiv>

        <MotionDiv
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from bg-purple-500 to bg-cyan-500">
              {' '}
              the best{' '}
            </span>
            project experience
          </span>
        </MotionDiv>
        <MotionP
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </MotionP>
        <MotionA
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </MotionA>
      </div>

      <MotionDiv
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Work Icons"
          height={650}
          width={650}
        />
      </MotionDiv>
    </MotionDiv>
  );
};
