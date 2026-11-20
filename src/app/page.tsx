import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Navbar } from "@/components/navbar";
import { AnimatedBackground } from "@/components/animated-background";

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans selection:bg-blue-200 dark:selection:bg-blue-900 overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
