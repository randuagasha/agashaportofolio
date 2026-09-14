import { Navbar } from "@/components/layout/navbar";
import { Preloader } from "@/components/layout/preLoader";
import { Hero } from "@/components/sections/hero/hero";
import { About } from "@/components/sections/about/about";
import { Achievements } from "@/components/sections/achievements/achievements";
import { Projects } from "@/components/sections/projects/projects";
import { Skills } from "@/components/sections/skills/skills";
import { Contact } from "@/components/sections/contact/contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Achievements />
        <Projects />

        <Skills />

        <Contact />
      </main>
    </>
  );
}