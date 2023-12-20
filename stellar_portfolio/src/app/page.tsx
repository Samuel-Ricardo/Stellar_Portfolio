import { Encryption } from '@/components/encryption.component';
import { Hero } from '@/components/hero/main.component';
import { Projects } from '@/components/projects/main.component';
import { Skills } from '@/components/skills/main.component';

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col gap-20">
      <Hero />
      <Skills />
      <Encryption />
      <Projects />
    </main>
  );
}
