import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { ModeToggle } from "@/components/theme-toggle";
import { AnimatedBackground } from "@/components/animated-background";

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans selection:bg-blue-200 dark:selection:bg-blue-900 overflow-x-hidden">
      <AnimatedBackground />
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/50 dark:bg-black/50 border-b border-zinc-200/50 dark:border-zinc-800/50">
        <a href="#" className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white">C.W.L.H<span className="text-blue-600 dark:text-blue-500">.</span></a>
        
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <li><a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Skills</a></li>
            <li><a href="#experience" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Experience</a></li>
            <li><a href="#personal-projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Personal Projects</a></li>
            <li><a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a></li>
          </ul>
          <ModeToggle />
        </div>
      </nav>

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
