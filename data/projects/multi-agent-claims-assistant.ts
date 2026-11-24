import type { Project } from "./types";

const odysseyDashboard = {
  src: "/images/multi-agent-claims-assistant/dashboard.png",
  alt: "Odyssey Dashboard member overview with claims, plan benefits, and the Odyssey AI panel",
  width: 1672,
  height: 941,
};

export const multiAgentClaimsAssistant = {
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
      src: "/images/multi-agent-claims-assistant/dashboard-chat.png",
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
} satisfies Project;
