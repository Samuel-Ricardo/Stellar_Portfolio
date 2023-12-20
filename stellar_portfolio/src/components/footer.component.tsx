import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from 'react-icons/rx';

import { FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <h3 className="font-bold text-[16px]">Community</h3>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <h3 className="font-bold text-[16px]">About</h3>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-[15px] ml-[6px]">
              Become Sponsor
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-[15px] ml-[6px]">
              Learning about me
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer text-[15px] ml-[6px]">
              samuelricardoofficial@gmail.com
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Samuel R. C. Barros 2023 All rights reserved
        </div>
      </div>
    </footer>
  );
};
