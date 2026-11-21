import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section className="site-container page-section projects" id="projects" aria-labelledby="projects-title">
      <h2 className="section-title" id="projects-title" data-reveal>Featured projects</h2>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
