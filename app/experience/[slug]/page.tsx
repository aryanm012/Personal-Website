import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioDetail } from "@/components/PortfolioDetail";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

export const ensureStatic = "navigation";
export const instant = false;

const experiencesWithPages = experience.filter(({ projectHref }) => !projectHref);

function getExperience(slug: string) {
  const entry = experiencesWithPages.find((item) => item.slug === slug);
  if (!entry) notFound();
  return entry;
}

export function generateStaticParams() {
  return experiencesWithPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/experience/[slug]">): Promise<Metadata> {
  const entry = getExperience((await params).slug);
  const title = `${"title" in entry ? entry.title : entry.role} at ${entry.organization}`;
  const description = entry.summary ?? title;
  return { title, description, openGraph: { title, description, type: "article" } };
}

export default async function ExperiencePage({ params }: PageProps<"/experience/[slug]">) {
  const entry = getExperience((await params).slug);

  if (entry.caseStudy) {
    return (
      <ProjectCaseStudy
        {...entry}
        label={`${entry.organization} · ${entry.role}`}
        backTo="experience"
      />
    );
  }

  const related = projects
    .filter((project) => project.experienceSlug === entry.slug)
    .map((project) => ({ href: `/projects/${project.slug}`, label: project.title }));

  return (
    <PortfolioDetail
      back={{ href: "/#experience", label: "Back to experience" }}
      label={entry.role}
      title={entry.organization}
      dates={entry.dates}
      summary={entry.summary}
      sections={entry.details}
      related={related}
    />
  );
}
