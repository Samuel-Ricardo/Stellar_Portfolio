import { HeroContent } from './content.component';

export const Hero = () => (
  <div className="relative flex flex-col h-full w-full" id="about-me">
    <video
      autoPlay
      muted
      loop
      className="rotate-180 absolute top-[-340px] w-full h-full left-0 z-[1] object-cover"
    >
      <source src="/blackhole.webm" type="video/webm" />
    </video>
    <HeroContent />
  </div>
);
