import type { DetailSection, ImplementationStudy } from "./detail";

type ExperienceEntry = {
  slug: string;
  organization: string;
  role: string;
  dates?: string;
  hideFromTimeline?: boolean;
  projectHref?: string;
  summary?: string;
} & (
  | { details?: DetailSection[]; caseStudy?: never }
  | { title: string; summary: string; technologies: string[]; caseStudy: ImplementationStudy }
);

// Timeline entries are listed in ascending start-date order.
export const experience: ExperienceEntry[] = [
  {
    slug: "ecolab",
    organization: "Ecolab",
    role: "Software Engineering Intern",
    dates: "Jun – Aug 2025",
    title: "Bioprocessing Data Automation",
    summary:
      "Built a Python pipeline that converts paper chromatography data sheets into structured records researchers can access in one place.",
    technologies: ["Python", "OCR", "ETL"],
    caseStudy: {
      problem: "Researchers manually transcribed chromatography results from paper data sheets into digital storage. The process created a two-year backlog and made historical experimental data difficult to access.",
      solution: "I built a web interface where researchers could upload experimental data sheets. A Python pipeline used optical character recognition (OCR) to extract measurements and save structured records in a central system.",
      technicalDetails: {
        heading: "Data extraction pipeline",
        body: "The pipeline prepared sheets for OCR, converted the extracted text into structured measurements, and validated the results before storing them.",
        flow: [
          { label: "Upload", description: "Researchers submit experiment sheets through the web interface." },
          { label: "Preprocess and extract", description: "Prepare each sheet for OCR, then extract the measurement text." },
          { label: "Structure and validate", description: "Convert the OCR output into experimental records and check the extracted measurements." },
          { label: "Store", description: "Save the validated results in a central system for researchers to access." },
        ],
      },
      bottleneck: "Variations in sheet layouts and OCR accuracy made measurements difficult to extract consistently. I used preprocessing and validation to produce reliable structured records from the scanned sheets.",
      metrics: {
        heading: "Impact",
        items: [
          { label: "Experimental runs digitized", value: "1,000+", context: "Chromatography experiments" },
          { label: "Data points digitized", value: "100,000+", context: "Measurements extracted from paper sheets" },
          { label: "Savings", value: "~$80,000", context: "From automating data extraction" },
        ],
      },
      skills: [
        "Optical character recognition",
        "ETL pipelines",
        "Data validation",
        "Full-stack development",
        "Business process automation",
      ],
    },
  },
  {
    slug: "easy-dynamics",
    organization: "Easy Dynamics",
    role: "IT Intern",
    dates: "Jan – Feb 2026",
    title: "AI-Powered IT Service Desk",
    summary:
      "Built a chatbot that answers employee IT questions using internal documentation and creates Jira tickets for unresolved issues.",
    technologies: ["RAG", "Vector search", "Jira API"],
    caseStudy: {
      problem: "IT support staff spent time answering recurring employee questions and manually creating tickets. Troubleshooting guidance was scattered across internal documentation and past Jira tickets.",
      solution: "I built a service desk chatbot that uses retrieval-augmented generation (RAG) to answer questions from internal standard operating procedures and past support tickets. When the chatbot cannot resolve an issue, it creates a ticket through the Jira API.",
      technicalDetails: {
        heading: "Retrieval and ticket creation",
        body: "The chatbot searched a vector-based knowledge base for relevant troubleshooting guidance. Role-based access control limited retrieval to information each employee was authorized to access.",
        flow: [
          { label: "Receive a question", description: "An employee describes an IT issue in the chatbot." },
          { label: "Retrieve guidance", description: "Search internal procedures and historical tickets within the employee’s access permissions." },
          { label: "Answer the question", description: "Use the retrieved guidance to generate troubleshooting steps." },
          { label: "Create a Jira ticket", description: "Submit a support ticket through the Jira API if the issue remains unresolved." },
        ],
      },
      bottleneck: "The main challenge was finding relevant guidance while enforcing enterprise permissions. I used vector-based retrieval to improve relevance and role-based access control to keep restricted information out of responses.",
      skills: [
        "Enterprise AI integration",
        "Retrieval-augmented generation",
        "API integration",
        "Authentication",
        "Authorization",
        "Workflow automation",
      ],
    },
  },
  {
    slug: "mitsubishi",
    organization: "Mitsubishi",
    role: "AI Software Engineer",
    dates: "Feb – May 2026",
    projectHref: "/projects/nda-document-search",
  },
  {
    slug: "humana",
    organization: "Humana",
    role: "Full-Stack Software Engineering Intern",
    dates: "May – Aug 2026",
    projectHref: "/projects/enrollment-platform",
  },
  {
    slug: "booz-allen-hamilton",
    organization: "Booz Allen Hamilton",
    role: "Software Engineer",
    dates: "Sep 2026 – Present",
    projectHref: "/projects/datadog-operations-assistant",
  },
];
