import { SparklesIcon } from '@heroicons/react/24/solid';
import { MotionDiv } from '../motion/div.component';
import { slideInFromRight, slideInFromTop } from '@/utils/motion';
import { MotionP } from '../motion/p.component';

export const SkillText = () => (
  <div className="w-full h-auto flex flex-col items-center justify-center">
    <MotionDiv
      variants={slideInFromTop}
      className="welcome_box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
    >
      <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
      <h1 className="welcome_text text-[13px]">Think better with NextJS 14</h1>
    </MotionDiv>
    <MotionP
      variants={slideInFromRight(0.5)}
      className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
    >
      Making your apps with modern technologies
    </MotionP>
    <MotionP
      variants={slideInFromRight(0.5)}
      className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
    >
      Never miss a task, deadline or idea
    </MotionP>
  </div>
);
