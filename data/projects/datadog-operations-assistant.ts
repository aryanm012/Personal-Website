import type { Project } from "./types";

const datadogDashboard = {
  src: "/images/datadog-operations-assistant/overview-desktop.png",
  alt: "Infrastructure overview showing critical, at-risk, and healthy resources, along with active issues and emerging risks",
  width: 1280,
  height: 720,
};

export const datadogOperationsAssistant = {
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
      src: "/images/datadog-operations-assistant/resource-detail-desktop.png",
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
        src: "/images/datadog-operations-assistant/architecture.png",
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
} satisfies Project;
