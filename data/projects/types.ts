import type { CaseStudy, DetailDocument, DetailImage, DetailSection } from "../detail";

type ProjectOverview = {
  slug: string;
  title: string;
  area: string;
  summary: string;
  technologies: string[];
  featured?: {
    summary: string;
    thumbnail?: Pick<DetailImage, "src" | "alt" | "width" | "height"> & { fit?: "contain" | "cover" };
    showRepository?: boolean;
  };
  context?: string;
  experienceSlug?: string;
  result?: string;
  repository?: string;
  documents?: DetailDocument[];
};

type CaseStudyProject = ProjectOverview & {
  details?: never;
  caseStudy: CaseStudy;
};

export type Project = (ProjectOverview & {
  details: DetailSection[];
  caseStudy?: never;
}) | CaseStudyProject;
