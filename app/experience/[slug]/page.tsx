import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioDetail } from "@/components/PortfolioDetail";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

export const ensureStatic = "navigation";
export const instant = false;

function getExperience(slug: string) {
  const entry = experience.find((item) => item.slug === slug);
  if (!entry) notFound();
  return entry;
}

export function generateStaticParams() {
  return experience.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/experience/[slug]">): Promise<Metadata> {
  const entry = getExperience((await params).slug);
  const title = `${entry.role} at ${entry.organization}`;
  const description = entry.summary ?? title;
  return { title, description, openGraph: { title, description, type: "article" } };
}

export default async function ExperiencePage({ params }: PageProps<"/experience/[slug]">) {
  const entry = getExperience((await params).slug);
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
