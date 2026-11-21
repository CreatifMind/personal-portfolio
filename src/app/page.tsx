import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-emerald-200/70 dark:selection:bg-emerald-900/70 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
