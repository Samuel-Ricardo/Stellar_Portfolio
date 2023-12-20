import { HeroContent } from './content.component';

export const Hero = () => (
  <div className="relative flex flex-col h-full w-full" id="about-me">
    <video
      autoPlay
      muted
      loop
      className="rotate-180 fixed top-[-340px] h-full w-full left-0 z-[1] object-cover"
    >
      <source src="/blackhole.webm" type="video/webm" />
    </video>
    <HeroContent />
  </div>
);
