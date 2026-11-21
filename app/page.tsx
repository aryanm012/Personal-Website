import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { PageMotion } from "@/components/PageMotion";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <PageMotion />
      <Hero />
      <Experience />
      <Projects />
      <About />
    </>
  );
}
