import type { DetailSection } from "./detail";

export type Project = {
  slug: string;
  title: string;
  area: string;
  summary: string;
  technologies: string[];
  details: DetailSection[];
  featured?: {
    summary: string;
    thumbnail?: {
      src: string;
      alt: string;
      width: number;
      height: number;
      fit?: "contain" | "cover";
    };
  };
  context?: string;
  experienceSlug?: string;
  result?: string;
  repository?: string;
};

export const projects: Project[] = [
  {
    slug: "multi-agent-claims-assistant",
    title: "Multi-Agent Claims Assistant",
    area: "Applied AI",
    summary:
      "Built a claims assistant that coordinates agents for benefits analysis, claims tracking, and issue resolution. Unresolved cases go to a representative with a generated summary.",
    featured: {
      summary: "Built a multi-agent assistant that analyzes benefits, tracks claims, and hands unresolved cases to a representative.",
      thumbnail: {
        src: "/images/odyssey-dashboard.png",
        alt: "Odyssey Dashboard member overview with claims, plan benefits, and the Odyssey AI panel",
        width: 1672,
        height: 941,
      },
    },
    result: "Resolved 74% of 215 test cases without escalation.",
    technologies: ["Python", "Google ADK", "React"],
    repository: "https://github.com/aryanm012/Odyssey-Dashboard-",
    details: [
      {
        heading: "Agent orchestration",
        body: "I used Google ADK to coordinate agents with distinct responsibilities. The workflow combined sequential steps for dependent tasks, parallel steps for independent checks, and loops for work that needed to repeat.",
      },
      {
        heading: "Handoff to a representative",
        body: "When the assistant couldn’t resolve a case, it prepared a summary and suggested next steps for a representative. That gave the human reviewer context without requiring them to start the investigation over.",
      },
      {
        heading: "Evaluation",
        body: "The 215 test cases covered automated resolution and escalation. I measured the share resolved without escalation and verified that the workflow handled the escalated cases in the evaluation.",
      },
    ],
  },
  {
    slug: "enrollment-platform",
    title: "Enrollment Platform",
    area: "Distributed systems",
    context: "Humana",
    experienceSlug: "humana",
    summary:
      "Helped build a full-stack enrollment workflow and designed event-driven synchronization to separate user-facing queries from background data processing.",
    featured: {
      summary: "Helped speed up enrollment queries by using Kafka to update a dedicated MongoDB read model.",
      thumbnail: {
        src: "/images/enrollment-platform-architecure.png",
        alt: "Enrollment architecture with a React frontend, a .NET API, and Kafka events feeding MongoDB and Azure analytics",
        width: 1448,
        height: 1086,
        fit: "cover",
      },
    },
    technologies: ["React", ".NET", "Kafka", "MongoDB"],
    details: [
      {
        heading: "The bottleneck",
        body: "Enrollment users needed a responsive way to query operational data. Interactive requests were coupled to a data processing system that also served downstream analytics.",
      },
      {
        heading: "Separating the read path",
        body: "I helped separate interactive queries from background processing. Kafka carried updates asynchronously to keep a MongoDB read model current, while downstream data processing could run on its own schedule.",
      },
      {
        heading: "Trade-off",
        body: "A separate read model made interactive queries faster, with the trade-off that updates propagate asynchronously. Keeping that propagation out of the request path let the two workloads scale independently.",
      },
    ],
  },
  {
    slug: "nda-document-search",
    title: "NDA Document Search",
    area: "Search & retrieval",
    context: "Mitsubishi",
    experienceSlug: "mitsubishi",
    summary:
      "Helped build a document workflow with semantic search. The ingestion pipeline prepared documents for indexing, and retrieval respected document-level permissions.",
    featured: {
      summary: "Helped users find relevant NDA passages faster with semantic search that respects document permissions.",
      thumbnail: {
        src: "/images/docms-document-qa-thumbnail.png",
        alt: "DocMS question-and-answer interface showing an NDA response with a linked source",
        width: 1996,
        height: 1320,
        fit: "cover",
      },
    },
    technologies: ["Next.js", "FastAPI", "AWS"],
    details: [
      {
        heading: "Architecture",
        body: "AWS Lambda ingests NDAs from SharePoint and indexes passages in an Amazon Bedrock knowledge base. When a user asks a question, DocMS retrieves passages, checks document access through Microsoft Graph, and streams an answer with sources.",
        image: {
          src: "/images/docms-document-qa-arch.png",
          alt: "DocMS architecture diagram showing separate indexing and document query flows",
          width: 1440,
          height: 810,
        },
      },
      {
        heading: "Preparing documents for search",
        body: "I worked on a serverless ingestion flow that split long documents into smaller passages and indexed their embeddings. Passage-level retrieval helped surface relevant sections of a document even when a query used different wording.",
      },
      {
        heading: "Relevance and permissions",
        body: "The search flow ranked candidate passages by relevance and checked access at the document level. This kept retrieval useful while respecting who could see the source material.",
      },
      {
        heading: "Result",
        body: "The workflow reduced the time needed to find relevant information in existing NDAs.",
      },
    ],
  },
  {
    slug: "robotics-safety-research",
    title: "Robotics Safety Research",
    area: "Controls research",
    context: "University of Maryland",
    experienceSlug: "university-of-maryland",
    summary:
      "Studied how control barrier functions can use a mathematical definition of safe states to constrain a robot’s control inputs.",
    featured: {
      summary: "Studied how control barrier functions constrain robot motion to stay within mathematically defined safety limits.",
      thumbnail: {
        src: "/images/robotics-safety-research.png",
        alt: "Simulated robotic arm holding a blue block beside two orange obstacles",
        width: 3837,
        height: 2094,
        fit: "cover",
      },
    },
    technologies: ["Control barrier functions", "Robotics"],
    details: [
      {
        heading: "Defining a safe region",
        body: "A control barrier function describes which states a robot can safely occupy. For example, a safe region can encode the minimum distance a robot should maintain from an obstacle.",
      },
      {
        heading: "Connecting the model to control",
        body: "I studied how that definition can constrain the next control input. The controller can pursue its objective while choosing from inputs that satisfy the safety constraint.",
      },
    ],
  },
  {
    slug: "stock-movement-prediction",
    title: "Stock Movement Prediction",
    area: "Machine learning",
    summary:
      "Trained and tuned a random forest to predict 20-day price movements using historical data and engineered technical indicators.",
    featured: {
      summary: "Trained a random forest to predict 20-day stock price direction from historical prices and technical indicators.",
      thumbnail: {
        src: "/images/stock-movement-prediction.png",
        alt: "Illustration of a stock price line dipping before rising",
        width: 1672,
        height: 941,
      },
    },
    result: "Improved evaluation accuracy from 56% to 75.1%.",
    technologies: ["Python", "Pandas", "scikit-learn"],
    repository: "https://github.com/jli433/FAANG_Monthly_Stock_Prediction",
    details: [
      {
        heading: "Data and features",
        body: "The model used more than 14,000 historical records across six companies. I worked with over 30 engineered technical indicators to give the classifier features beyond the raw price history.",
      },
      {
        heading: "Model development",
        body: "I used a random forest to classify the direction of 20-day price movements. Feature selection and hyperparameter tuning improved the evaluation accuracy, with precision of 0.80 and recall of 0.79.",
      },
    ],
  },
];
