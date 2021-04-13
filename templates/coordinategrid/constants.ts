import { Phase } from "templates/types";

export const CoordinateGridPhases: { [key in Phase]: Phase } = {
  PREDICTION: "PREDICTION",
  FIRST_PROPOSAL: "FIRST_PROPOSAL",
  MODIFIED_PROPOSAL: "MODIFIED_PROPOSAL",
  FINAL_SOLUTION: "FINAL_SOLUTION",
};
