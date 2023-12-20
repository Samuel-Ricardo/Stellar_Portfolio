import { slideInFromTop } from '@/utils/motion';
import { MotionDiv } from './motion/div.component';
import { MotionP } from './motion/p.component';
import Image from 'next/image';

export const Encryption = () => (
  <div className="flex flex-row relative items-center justfy-center min-h-screen w-full h-full">
    <div className="absolute w-auto h-auto top-0 z-[5]">
      <MotionP
        variants={slideInFromTop}
        className="text-[40px] font-medium text-center text-gray-200"
      >
        Performance
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {' '}
          &{' '}
        </span>
        Security
      </MotionP>
    </div>

    <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
      <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
        <Image
          src="/LockTop.png"
          alt="Lock top"
          width={50}
          height={50}
          className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
        />
        <Image
          src="/LockMain.png"
          alt="Lock Main"
          width={70}
          height={70}
          className=" z-10"
        />
      </div>

      <div className="welcome_box px-[15px] py-[4px] z-[20] my-[20] border border-[#7042f88b] opacity-[0.9]">
        <h1 className="welcome_text text-[12]">Encryption</h1>
      </div>
    </div>

    <div className="absolute z-[20] bottom-[10px] px-[5px]">
      <p className="cursive text-[20px] font-medium text-center text-gray-300">
        Secure your data with end-to-end encryption
      </p>
    </div>

    <div className="w-full flex items-start justify-center absolute">
      <video
        loop
        muted
        autoPlay
        playsInline
        preload="false"
        className="w-full h-auto"
        src="/encryption.webm/"
      />
    </div>
  </div>
);
