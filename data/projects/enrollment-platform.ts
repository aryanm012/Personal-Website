import type { Project } from "./types";

const enrollmentArchitecture = {
  src: "/images/enrollment-platform/architecture.svg",
  alt: "Enrollment architecture diagram showing Microsoft Entra ID, a React frontend, a .NET API, and Kafka streams feeding MongoDB and Azure Databricks",
  width: 1440,
  height: 760,
};

export const enrollmentPlatform = {
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
      fit: "contain",
    },
  },
  result: "10 h/week saved · $107K projected NPV",
  technologies: ["React", ".NET", "Kafka", "MongoDB"],
  caseStudy: {
    preview: {
      src: "/images/enrollment-platform/enrollment-waves.png",
      alt: "Enrollment Waves dashboard with a Create Wave button and a table with Contract, PBP, Segment, Member, Plan, Status, and Time columns",
      width: 1754,
      height: 897,
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
} satisfies Project;
