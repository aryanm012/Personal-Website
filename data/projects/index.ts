import { datadogOperationsAssistant } from "./datadog-operations-assistant";
import { enrollmentPlatform } from "./enrollment-platform";
import { ndaDocumentSearch } from "./nda-document-search";
import { multiAgentClaimsAssistant } from "./multi-agent-claims-assistant";
import { stockMovementPrediction } from "./stock-movement-prediction";
import { roboticsSafetyResearch } from "./robotics-safety-research";
import { climateComputingFire } from "./climate-computing-fire";
import type { Project } from "./types";

export type { Project } from "./types";

export const projects: Project[] = [
  datadogOperationsAssistant,
  enrollmentPlatform,
  ndaDocumentSearch,
  multiAgentClaimsAssistant,
  stockMovementPrediction,
  roboticsSafetyResearch,
  climateComputingFire,
];
