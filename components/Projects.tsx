import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import "./Projects.css";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const moreProjects = projects.filter((project) => !project.featured);

  return (
    <section className="site-container page-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-content">
        <SectionHeading id="projects-title" label="Portfolio" title="Projects" />
        {featured.length > 0 && (
          <div className="project-grid">
            {featured.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        )}
        {moreProjects.length > 0 && (
          <nav className="more-projects" aria-labelledby="more-projects-title" data-reveal>
            <h3 id="more-projects-title">More projects</h3>
            <ul>
              {moreProjects.map(({ slug, title }) => (
                <li key={slug}><Link className="text-link" href={`/projects/${slug}`}>{title}</Link></li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
