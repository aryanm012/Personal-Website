import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { TechnologyTags } from "./TechnologyTags";

export function ProjectCard({ project }: { project: Project }) {
  const { featured, title, slug, area, context, result, technologies, repository } = project;
  const thumbnail = featured?.thumbnail;

  return (
    <article className="project-card" data-reveal>
      {thumbnail && (
        <Image
          className="project-thumbnail"
          src={thumbnail.src}
          alt={thumbnail.alt}
          width={thumbnail.width}
          height={thumbnail.height}
          sizes="(min-width: 64rem) 335px, (min-width: 36rem) 50vw, 100vw"
          style={{ objectFit: thumbnail.fit }}
        />
      )}
      <div className="project-meta">
        <span className="eyebrow">{area}</span>
        {context && <span>{context}</span>}
      </div>
      <h3>{title}</h3>
      <p className="project-summary">{featured?.summary ?? project.summary}</p>
      {result && <p className="project-result">{result}</p>}
      <div className="project-footer">
        <TechnologyTags technologies={technologies} />
        <div className="project-links">
          <Link className="text-link" href={`/projects/${slug}`} aria-label={`View project: ${title}`}>
            View project
          </Link>
          {repository && (
            <a className="text-link" href={repository} aria-label={`${title} on GitHub`}>GitHub</a>
          )}
        </div>
      </div>
    </article>
  );
}
