import Link from "next/link";
import type { Project } from "@/data/projects";
import { TechnologyTags } from "./TechnologyTags";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" data-reveal>
      <div className="project-meta">
        <span className="eyebrow">{project.area}</span>
        {project.context && <span>{project.context}</span>}
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      {project.result && <p className="project-result">{project.result}</p>}
      <div className="project-footer">
        <TechnologyTags technologies={project.technologies} />
        <div className="project-links">
          <Link
            className="text-link"
            href={`/projects/${project.slug}`}
            aria-label={`View project: ${project.title}`}
          >
            View project
          </Link>
          {project.repository && (
            <a className="text-link" href={project.repository} aria-label={`${project.title} on GitHub`}>
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
