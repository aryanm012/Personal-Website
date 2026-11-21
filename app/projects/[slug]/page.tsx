import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioDetail } from "@/components/PortfolioDetail";
import { TechnologyTags } from "@/components/TechnologyTags";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

export const ensureStatic = "navigation";
export const instant = false;

function getProject(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return project;
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { title, summary: description } = getProject((await params).slug);
  return { title, description, openGraph: { title, description, type: "article" } };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const project = getProject((await params).slug);
  const role = experience.find((entry) => entry.slug === project.experienceSlug);

  return (
    <PortfolioDetail
      back={{ href: "/#projects", label: "Back to projects" }}
      label={project.context ? `${project.area} · ${project.context}` : project.area}
      title={project.title}
      summary={project.summary}
      sections={project.details}
      related={role && [{ href: `/experience/${role.slug}`, label: `Experience at ${role.organization}` }]}
    >
      {project.result && <p className="detail-result">{project.result}</p>}
      <TechnologyTags technologies={project.technologies} />
      {project.repository && (
        <a className="button button-outline" href={project.repository}>View on GitHub</a>
      )}
    </PortfolioDetail>
  );
}
