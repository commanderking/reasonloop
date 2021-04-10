import { CoordinateGridPhases } from "templates/coordinategrid/constants";

export const getCurrentPhase = (solutions) => {
  if (!solutions.length) {
    return CoordinateGridPhases.INITIAL_ATTEMPT;
  }

  if (solutions.length === 1) {
    return CoordinateGridPhases.SECOND_ATTEMPT;
  }

  const hasFinalAnswer = (solutions) => {};
};
