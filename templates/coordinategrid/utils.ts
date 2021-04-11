import { CoordinateGridPhases } from "templates/coordinategrid/constants";

export const getCurrentPhase = (solutions) => {
  if (!solutions.length) {
    return CoordinateGridPhases.PREDICTION;
  }

  if (solutions.length === 1) {
    return CoordinateGridPhases.FIRST_SOLUTION;
  }

  if (solutions.length >= 2) {
    return CoordinateGridPhases.MODIFIED_SOLUTION;
  }
};
