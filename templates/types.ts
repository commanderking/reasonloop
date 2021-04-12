import { CoordinateGridPhases } from "templates/coordinategrid/constants";

export type Phase =
  | "PREDICTION"
  | "FIRST_PROPOSAL"
  | "MODIFIED_PROPOSAL"
  | "FINAL_SOLUTION";
