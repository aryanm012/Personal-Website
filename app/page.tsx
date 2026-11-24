import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { PageMotion } from "@/components/PageMotion";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <PageMotion />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
    </>
  );
}
