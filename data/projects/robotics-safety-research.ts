import type { Project } from "./types";

const roboticsSimulation = {
  src: "/images/robotics-safety-research/simulation.png",
  alt: "Simulated robotic arm holding a blue block beside two orange obstacles",
  width: 3837,
  height: 2094,
};

export const roboticsSafetyResearch = {
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
} satisfies Project;
