import type { DetailSection } from "./detail";

type ExperienceEntry = {
  slug: string;
  organization: string;
  role: string;
  dates?: string;
  summary?: string;
  details?: DetailSection[];
};

export const experience: ExperienceEntry[] = [
  {
    slug: "booz-allen-hamilton",
    organization: "Booz Allen Hamilton",
    role: "Software Engineer",
    dates: "Sep 2026 – Present",
    summary:
      "Built integrations for retrieving infrastructure telemetry and a full-stack interface for configuring and managing monitors.",
    details: [
      {
        heading: "Observability integrations",
        body: "I built a Datadog API client that made infrastructure telemetry and monitor data available programmatically. I also exposed selected operations through an agent tool interface so troubleshooting workflows could use the same integrations.",
      },
      {
        heading: "Monitor management",
        body: "I worked across TanStack Start, FastAPI, and AWS RDS to build an interface for managing monitors. The workflow validated configurations before saving them and applying changes through the Datadog API.",
      },
    ],
  },
  {
    slug: "humana",
    organization: "Humana",
    role: "Full-Stack Software Engineering Intern",
    dates: "May – Aug 2026",
    summary:
      "Developed an enrollment platform and helped redesign its data flow so interactive queries could run independently of background processing.",
    details: [
      {
        heading: "Full-stack enrollment",
        body: "I worked on the React and TypeScript enrollment interface and the backend services that supported it. My work spanned the enrollment workflow and how the service retrieved the data people needed during that workflow.",
      },
      {
        heading: "Event-driven data flow",
        body: "I helped move synchronization to an asynchronous Kafka pipeline so the enrollment service could read operational data without waiting on downstream processing.",
      },
    ],
  },
  {
    slug: "mitsubishi",
    organization: "Mitsubishi",
    role: "AI Software Engineer",
    dates: "Feb – May 2026",
    summary:
      "Worked on document management and semantic search, from ingestion and indexing to retrieval that respected document permissions.",
    details: [
      {
        heading: "Document workflows",
        body: "I helped build a Next.js and FastAPI application that brought document management and search into the same workflow. My work connected the application to serverless document ingestion and semantic indexing.",
      },
      {
        heading: "Access-aware retrieval",
        body: "I worked on the retrieval layer that scored relevant passages and checked document-level access. This let the app surface useful text within the permissions already in place.",
      },
    ],
  },
  {
    slug: "ecolab",
    organization: "Ecolab",
    role: "Software Engineering Intern",
    dates: "Jun – Aug 2025",
    summary:
      "Built an OCR workflow to turn chromatography reports into structured data and reduce manual entry.",
    details: [
      {
        heading: "Digitizing historical runs",
        body: "I built a pipeline to extract data from existing chromatography reports with optical character recognition. The workflow converted information that previously needed manual transcription into structured records.",
      },
    ],
  },
  {
    slug: "easy-dynamics",
    organization: "Easy Dynamics",
    role: "IT Intern",
  },
  {
    slug: "university-of-maryland",
    organization: "University of Maryland",
    role: "Robotics Research",
    summary:
      "Explored how control barrier functions can encode safety constraints for robotic systems.",
    details: [
      {
        heading: "Robotics safety",
        body: "I explored how a mathematical safety constraint can inform the inputs a robot controller is allowed to choose. The research connected the definition of a safe state to the decisions a controller makes as the robot moves.",
      },
    ],
  },
];
