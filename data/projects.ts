import type { CaseStudy, DetailDocument, DetailImage, DetailSection } from "./detail";

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

const enrollmentArchitecture = {
  src: "/images/enrollment-platform-architecure.png",
  alt: "Enrollment architecture with a React frontend, a .NET API, and Kafka events feeding MongoDB and Azure Databricks",
  width: 1448,
  height: 1086,
};

const odysseyDashboard = {
  src: "/images/odyssey-dashboard.png",
  alt: "Odyssey Dashboard member overview with claims, plan benefits, and the Odyssey AI panel",
  width: 1672,
  height: 941,
};

const datadogDashboard = {
  src: "/images/overview-desktop.png",
  alt: "Infrastructure overview showing critical, at-risk, and healthy resources, along with active issues and emerging risks",
  width: 1280,
  height: 720,
};

const ndaSearchPreview = {
  src: "/images/docms-document-qa-thumbnail.png",
  alt: "DocMS question-and-answer interface showing an NDA response with a linked source",
  width: 1996,
  height: 1320,
};

const roboticsSimulation = {
  src: "/images/robotics-safety-research.png",
  alt: "Simulated robotic arm holding a blue block beside two orange obstacles",
  width: 3837,
  height: 2094,
};

const stockNotebook = {
  href: "https://github.com/jli433/FAANG_Monthly_Stock_Prediction/blob/main/data.ipynb",
  label: "Open the Stock Movement Prediction notebook on GitHub",
};

const stockPriceHistory = {
  src: "/images/stock-price-history.png",
  alt: "Line chart showing average stock prices over time for Apple, Amazon, Google, Meta, Microsoft, and Nvidia",
  width: 1389,
  height: 690,
};

const climatePoster = {
  src: "/images/climate-computing-fire-poster.webp",
  alt: "FIRE climate computing poster comparing simulated temperatures across three Arctic sea ice scenarios",
  width: 1200,
  height: 1061,
};

export const projects: Project[] = [
  {
    slug: "multi-agent-claims-assistant",
    title: "Multi-Agent Claims Intelligence",
    area: "Applied AI",
    context: "Humana hackathon",
    summary:
      "An AI claims assistant that coordinates specialized agents to review benefits and claim history, investigate issues, and evaluate possible resolutions.",
    featured: {
      summary: "Built a multi-agent assistant that analyzes benefits, tracks claims, and hands unresolved cases to a representative.",
      thumbnail: odysseyDashboard,
    },
    result: "Resolved 74% of 215 test cases without escalation.",
    technologies: ["Python", "Google ADK", "React"],
    repository: "https://github.com/aryanm012/Odyssey-Dashboard-",
    caseStudy: {
      preview: {
        ...odysseyDashboard,
        src: "/images/odyssey-dashboard-chat.png",
        alt: "Odyssey Dashboard member overview with claims, plan benefits, and a chat input with a send button",
        caption: "Odyssey Dashboard with the claims assistant.",
      },
      problem: "Resolving healthcare claims requires representatives to navigate complex policies, benefits, and historical claims information. That process can lead to inconsistent resolutions and unnecessary escalations.",
      solution: "I built a multi-agent system with Google’s Agent Development Kit. It retrieves benefits information, summarizes claims, identifies underlying issues, and evaluates possible resolutions. Specialized research agents investigate independently before a mediator reviews their findings.",
      technicalDetails: {
        heading: "Multi-agent architecture",
        body: "I combined sequential steps for dependent tasks, parallel execution for independent investigations, and iterative checks for work that needed to be repeated. The workflow supports handing unresolved claims to a representative with a generated summary.",
        flow: [
          { label: "Gather context", description: "Retrieve benefits and claim history, then summarize the case." },
          { label: "Investigate in parallel", description: "Specialized research agents independently identify possible issues." },
          { label: "Review findings", description: "A mediator evaluates the findings and potential resolutions." },
          { label: "Resolve or hand off", description: "Send unresolved cases to a representative with a summary and suggested next steps." },
        ],
      },
      bottleneck: "Agents reasoned independently, which made it difficult to keep resolutions consistent. I used deterministic routing, gave each agent a defined responsibility, and structured how their findings were evaluated.",
      metrics: {
        heading: "Impact",
        items: [
          { label: "Hackathon placement", value: "Top 5", context: "Humana hackathon" },
          { label: "Resolved without escalation", value: "74%", context: "Of evaluated test cases" },
          { label: "Test cases evaluated", value: "215", context: "All escalated cases were handled" },
        ],
      },
      skills: [
        "Multi-agent architectures",
        "Agent orchestration",
        "Context management",
        "AI evaluation",
        "Prompt engineering",
        "Deterministic workflow design",
      ],
    },
  },
  {
    slug: "enrollment-platform",
    title: "Enrollment Platform",
    area: "Distributed systems",
    context: "Humana",
    experienceSlug: "humana",
    summary:
      "A self-service platform for Humana’s enrollment operations team to manage enrollment waves, update member queues, and track letter generation.",
    featured: {
      summary: "Architected an event-driven enrollment platform with a MongoDB read model and a Kafka pipeline to Azure Databricks.",
      thumbnail: {
        ...enrollmentArchitecture,
        fit: "cover",
      },
    },
    result: "10 h/week saved · $107K projected NPV",
    technologies: ["React", ".NET", "Kafka", "MongoDB"],
    caseStudy: {
      preview: {
        src: "/images/enrollment-platform-ui.png",
        alt: "Enrollment dashboard mockup showing a Create Wave button and a table of enrollment waves, member counts, and letter statuses",
        width: 1752,
        height: 897,
        caption: "Illustrative UI mockup with fictional enrollment data.",
      },
      problem: "Humana’s enrollment and member letter generation relied on manual ETL workflows and developer-triggered scripts. Business users had to rely on engineers to run those processes, adding delays and manual work.",
      solution: "I developed a full-stack platform using React, TypeScript, and .NET. Business users could create enrollment waves, manage members, and track letter generation directly in the application.",
      technicalDetails: {
        heading: "Event-driven architecture",
        body: "The .NET backend publishes enrollment events to Kafka. MongoDB serves real-time application queries, and Azure Databricks consumes events for asynchronous data processing.",
        image: enrollmentArchitecture,
      },
      bottleneck: "The initial API queried Databricks synchronously, so each request waited for analytical processing. I moved application queries to a dedicated MongoDB read layer so analytical processing could run independently.",
      metrics: {
        heading: "Impact",
        items: [
          { label: "API latency", value: "~400 ms", context: "Down from about 3 seconds" },
          { label: "Manual work eliminated", value: "10 h/week", context: "Through self-service enrollment" },
          { label: "Projected NPV", value: "$107K", context: "Net present value over three years" },
        ],
      },
      skills: [
        "Distributed systems",
        "Event-driven architecture",
        "Asynchronous processing",
        "Database optimization",
        "REST API development",
        "Enterprise system design",
      ],
    },
  },
  {
    slug: "datadog-operations-assistant",
    title: "Datadog Operations Assistant",
    area: "Observability",
    context: "Booz Allen Hamilton",
    experienceSlug: "booz-allen-hamilton",
    summary:
      "A React dashboard for reviewing AWS hosts and Datadog monitors, with tools for investigating related alerts.",
    featured: {
      summary: "Helped build a React dashboard that shows the latest complete snapshot of AWS hosts and Datadog monitors.",
      thumbnail: datadogDashboard,
    },
    technologies: ["Python", "Datadog API", "PostgreSQL", "React"],
    caseStudy: {
      preview: {
        ...datadogDashboard,
        caption: "Infrastructure overview with demo health and forecast data.",
      },
      screenshot: {
        src: "/images/resource-detail-desktop.png",
        alt: "EC2 resource details showing disk, memory, and CPU usage, a disk utilization forecast, and monitor controls",
        width: 1280,
        height: 720,
        caption: "Resource detail showing utilization and a disk usage forecast for a demo EC2 instance.",
      },
      problem: "When an AWS service degrades, DevOps engineers piece together Datadog alerts, metrics, logs, and traces to understand what happened. Several alerts can point to the same underlying issue, making it harder to decide where to start.",
      solution: "We built a Datadog Operations Assistant that syncs AWS host and monitor data into PostgreSQL and displays it in a React dashboard. The broader project groups related alerts into tickets and uses AI to summarize them for investigation.",
      technicalDetails: {
        heading: "Snapshot sync architecture",
        body: "A Python client reads every page from the separate Datadog host and monitor endpoints to build a snapshot for PostgreSQL. The React dashboard reads the saved data through backend endpoints using an OpenAPI-generated TypeScript client.",
        image: {
          src: "/images/booz-allen-arch.png",
          alt: "System diagram showing React requests reaching FastAPI through API Gateway and an EventBridge-scheduled Lambda fetching Datadog data and writing to PostgreSQL",
          width: 1179,
          height: 652,
          caption: "System architecture for dashboard requests, scheduled Datadog checks, and shared PostgreSQL storage.",
        },
      },
      bottleneck: "A failed Datadog request could leave the dashboard with host and monitor data from different sync runs. The sync worker fetches both complete datasets before saving either one. If a request fails, the dashboard keeps showing the last complete snapshot.",
      metrics: {
        heading: "Impact",
        summary: "Engineers have one place to review monitored resources and alert states. Grouping and summarizing alerts can reduce the manual work of understanding an incident and choosing what to investigate first.",
      },
      skills: [
        "Python API client development and testing",
        "API pagination and error handling",
        "Monitor creation and updates",
        "React integration",
        "OpenAPI-generated TypeScript clients",
      ],
    },
  },
  {
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
          src: "/images/docms-document-qa-arch.png",
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
  },
  {
    slug: "robotics-safety-research",
    title: "Robotics Safety Research",
    area: "Controls research",
    context: "University of Maryland",
    experienceSlug: "university-of-maryland",
    summary:
      "Implemented a safety-critical controller that uses quadratic programming to guide a robot toward a target while enforcing safety constraints.",
    featured: {
      summary: "Built a robot controller that combines control barrier and Lyapunov functions to pursue a target within safety limits.",
      thumbnail: {
        ...roboticsSimulation,
        fit: "cover",
      },
    },
    technologies: ["ROS 2", "Control barrier functions", "Control Lyapunov functions"],
    caseStudy: {
      preview: {
        ...roboticsSimulation,
        caption: "Robotic arm simulation with obstacles in the workspace.",
      },
      problem: "Autonomous robots must reach their goals in changing environments while staying clear of obstacles and other unsafe states. A controller focused on reaching a target can select a motion that violates those safety limits.",
      solution: "I implemented a safety-critical control framework using control barrier functions (CBFs) and control Lyapunov functions (CLFs). A quadratic program uses both to select a control input that moves the robot toward its target while enforcing safety constraints.",
      technicalDetails: {
        heading: "Safety-critical control workflow",
        body: "The CBF constrains the robot’s inputs to keep it within a defined safe region. The CLF describes how the controller should reduce a measure of error relative to the target. The quadratic program combines these conditions when selecting the next control input.",
        flow: [
          { label: "Define the safe region", description: "Use a CBF to express safety limits such as minimum clearance from an obstacle." },
          { label: "Define progress toward the goal", description: "Use a CLF to specify how the robot should reduce its error relative to the target." },
          { label: "Choose a control input", description: "Solve the quadratic program to select a feasible command that enforces the safety constraints and accounts for progress toward the goal." },
        ],
      },
      bottleneck: "Motion that reduces error relative to the target can also reduce clearance from an obstacle. Tuning the control parameters and formulating feasible constraints were critical to balancing stability and safety.",
      skills: [
        "Mathematical optimization",
        "Robotics",
        "Control theory",
        "Autonomous systems",
        "ROS 2",
        "Quadratic programming",
        "Safety-critical software development",
      ],
    },
  },
  {
    slug: "stock-movement-prediction",
    title: "Stock Movement Prediction",
    area: "Machine learning",
    summary:
      "Trained a random forest to predict whether six major technology stocks would gain at least 1% over the next 20 trading days.",
    featured: {
      summary: "Used historical market data to predict gains of at least 1% over 20 trading days for six major technology stocks.",
      thumbnail: stockPriceHistory,
      showRepository: false,
    },
    result: "72.25% test accuracy · 78% precision · 75% recall",
    technologies: ["Python", "Pandas", "scikit-learn"],
    repository: stockNotebook.href,
    caseStudy: {
      preview: { ...stockPriceHistory, link: stockNotebook },
      problem: "Short-term stock movements are difficult to predict because prices respond to changing market conditions and unexpected events. I tested whether historical data could predict a gain of at least 1% over 20 trading days for Meta, Apple, Amazon, Nvidia, Microsoft, and Google, and which indicators improved those predictions.",
      solution: "I engineered features from historical stock data across five categories: momentum, trends, volatility, volume, and relative market performance. I compared K-nearest neighbors, a decision tree, logistic regression, and a random forest. The random forest had the strongest baseline performance, so I selected it for hyperparameter tuning.",
      technicalDetails: {
        heading: "Feature analysis",
        body: "I used permutation importance to measure how shuffling each feature affected model performance. Market return, relative strength, and daily return scored below zero in the initial analysis. I reduced the feature set from 37 to 13. In the reduced model, the MACD signal, both Bollinger Bands, and 30-day volatility ranked highest.",
        image: {
          src: "/images/stock-permutation-importance.png",
          alt: "Horizontal bar chart ranking the 13 retained features by permutation importance, led by the MACD signal, lower and upper Bollinger Bands, and 30-day volatility",
          width: 915,
          height: 682,
          caption: "Permutation importance for the 13 features retained by the final random forest.",
        },
      },
      bottleneck: "The training labels were imbalanced, and deep trees risked overfitting. I used class weighting and constrained tree complexity during tuning.",
      metrics: {
        heading: "Results",
        summary: "The evaluation prioritized a balance between precision and recall while controlling overfitting. Further chronological validation would help assess how well the model generalizes to future market conditions.",
        items: [
          { label: "Test accuracy", value: "72.25%", context: "Across 2,933 test samples" },
          { label: "Precision", value: "78%", context: "Of predicted gains that met the 1% threshold" },
          { label: "Recall", value: "75%", context: "Of actual gains that met the 1% threshold" },
          { label: "Gains correctly identified", value: "1,324", context: "True positives in the test set" },
        ],
      },
      skills: [
        "Feature engineering",
        "Classification model evaluation",
        "Hyperparameter tuning",
        "Class imbalance handling",
        "Permutation importance",
      ],
    },
  },
  {
    slug: "climate-computing-fire",
    title: "Computational Climate Research",
    area: "Atmospheric modeling",
    context: "University of Maryland",
    summary:
      "Our University of Maryland FIRE team used atmospheric simulations to study how August Arctic sea ice extremes might influence extratropical cyclones in North America.",
    featured: {
      summary: "Automated atmospheric simulations and data processing on NCAR’s Derecho supercomputer to study how surface conditions influence storms.",
      thumbnail: {
        ...climatePoster,
        fit: "cover",
      },
    },
    technologies: ["WRF", "Python", "NCL", "NCEP/NCAR Reanalysis", "NCAR Derecho"],
    caseStudy: {
      preview: {
        ...climatePoster,
        caption: "FIRE research poster preview.",
      },
      posterSections: [
        {
          heading: "Introduction",
          body: "Arctic sea ice loss contributes to amplified warming and can change the temperature contrast between the Arctic and midlatitudes. Our team tested how different August sea ice extents might affect atmospheric conditions for summertime extratropical cyclones.",
        },
        {
          heading: "Methods",
          body: "We ran the Weather Research and Forecasting model at 20 km resolution over North America and the North Atlantic. Using August 1980 atmospheric conditions from the NCEP/NCAR Global Reanalysis, we compared the 1980 control sea ice extent with the 1984 median and 2012 minimum extents.",
        },
        {
          heading: "Results",
          body: "Compared with the 1980 control, the 1984 case produced slight cooling over Canada and the Arctic and slight warming near the U.S. East Coast. The 2012 case showed stronger changes in the same regions across the pressure levels examined.",
        },
        {
          heading: "Analysis",
          body: "The strongest temperature differences appeared at 850 and 500 hPa, in the lower and middle atmosphere. We compared the simulated anomalies with NOAA’s reference patterns for the North Atlantic Oscillation (NAO), whose phases are associated with changes in storm track position and strength.",
        },
        {
          heading: "Conclusions",
          body: "The 2012 minimum-ice simulation most closely resembled the positive phase of the NAO. The 1984 case showed a weaker resemblance. The team interpreted the stronger temperature contrast at lower altitudes as a potential contributor to conditions favorable to summertime cyclone development.",
          fullWidth: true,
        },
        {
          heading: "Acknowledgements",
          body: "The team used the Derecho supercomputer provided by the NSF National Center for Atmospheric Research (NCAR), with support from the National Science Foundation.",
        },
        {
          heading: "References",
          body: "The poster cites Coumou et al. (2018), Francis and Skific (2015), Hay et al. (2025), and NOAA’s NAO temperature patterns. The full reference list is in the research paper below.",
        },
      ],
    },
    documents: [
      { title: "Research poster", src: "/documents/climate-computing-fire-poster.pdf" },
      { title: "Research paper", src: "/documents/climate-computing-fire-paper.pdf" },
    ],
  },
];
