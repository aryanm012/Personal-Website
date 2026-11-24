export type DetailImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  link?: { href: string; label: string };
};

export type DetailDocument = {
  title: string;
  src: string;
};

export type DetailSection = {
  heading: string;
  body: string | string[];
  image?: DetailImage;
};

export type ImplementationStudy = {
  preview?: DetailImage;
  screenshot?: DetailImage;
  problem: string;
  solution: string;
  technicalDetails: { heading: string; body: string } & (
    { image: DetailImage } | { flow: { label: string; description: string }[] }
  );
  bottleneck: string;
  metrics?: {
    heading: string;
    summary?: string;
    items?: { label: string; value: string; context: string }[];
  };
  skills: string[];
};

export type CaseStudy = ImplementationStudy | {
  preview: DetailImage;
  posterSections: { heading: string; body: string; fullWidth?: boolean }[];
};
