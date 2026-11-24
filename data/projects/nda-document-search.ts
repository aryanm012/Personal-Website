import type { Project } from "./types";

const ndaSearchPreview = {
  src: "/images/nda-document-search/overview.png",
  alt: "DocMS question-and-answer interface showing an NDA response with a linked source",
  width: 1996,
  height: 1320,
};

export const ndaDocumentSearch = {
  slug: "nda-document-search",
  title: "NDA Document Search",
  area: "Search & retrieval",
  context: "Mitsubishi",
  experienceSlug: "mitsubishi",
  summary:
    "Built a semantic search system that helps Mitsubishi employees find relevant information across more than 5,000 NDAs while respecting document-level permissions.",
  featured: {
    summary: "Helped users find relevant NDA passages faster with semantic search that respects document permissions.",
    thumbnail: {
      ...ndaSearchPreview,
      fit: "cover",
    },
  },
  technologies: ["Next.js", "FastAPI", "AWS"],
  caseStudy: {
    preview: {
      ...ndaSearchPreview,
      caption: "DocMS search interface with an answer and a link to the source NDA.",
    },
    problem: "Employees had to search through thousands of NDAs to find relevant legal and business information. Keyword search often missed relevant passages when agreements used different wording for the same concept.",
    solution: "I developed a retrieval-augmented generation (RAG) pipeline that lets employees search more than 5,000 NDAs by meaning. The system uses relevant passages from documents each employee can access to generate answers with links to the sources.",
    technicalDetails: {
      heading: "Retrieval architecture",
      body: "Microsoft Graph keeps SharePoint documents in sync. The AWS Lambda ingestion pipeline dynamically splits documents into passages, generates vector embeddings, and indexes them in OpenSearch. FastAPI retrieves passages by similarity and enforces role-based access control before the system generates an answer with links to the source documents.",
      image: {
        src: "/images/nda-document-search/architecture.png",
        alt: "DocMS diagram showing NDA indexing from SharePoint and a query flow that checks document access before returning answers with sources",
        width: 1440,
        height: 810,
        caption: "DocMS architecture showing the indexing and document query flows.",
      },
    },
    bottleneck: "Checking document-level permissions during retrieval added computational overhead. I cached permission checks and optimized retrieval filters to reduce that overhead while continuing to enforce access controls.",
    metrics: {
      heading: "Impact",
      items: [
        { label: "Information retrieval time", value: "~10 seconds", context: "Down from about five minutes" },
        { label: "Documents searchable", value: "5,000+", context: "NDA documents indexed for semantic search" },
      ],
    },
    skills: [
      "RAG architecture",
      "Vector databases",
      "Semantic search",
      "Embedding models",
      "Serverless computing",
      "Caching",
      "Enterprise access control",
    ],
  },
} satisfies Project;
