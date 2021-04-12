import { CoordinateGridPhases } from "templates/coordinategrid/constants";
import { Phase } from "templates/types";

export const getCurrentPhase = (solutions): Phase => {
  if (!solutions.length) {
    return CoordinateGridPhases.PREDICTION;
  }

  if (solutions.length === 1) {
    return CoordinateGridPhases.FIRST_PROPOSAL;
  }

  if (solutions.length >= 2) {
    return CoordinateGridPhases.MODIFIED_PROPOSAL;
  }
};
