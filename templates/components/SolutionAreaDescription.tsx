import { Box, Heading } from "@chakra-ui/react";
import { Phase } from "templates/types";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";
type Props = {
  currentPhase: Phase;
};

const { PREDICTION, FIRST_SOLUTION, MODIFIED_SOLUTION } = CoordinateGridPhases;
const fontSize = "2xl";

export const SolutionAreaDescription = ({ currentPhase }) => {
  return (
    <Box>
      {currentPhase === PREDICTION && (
        <Heading fontSize={fontSize}>What are your initial thoughts?</Heading>
      )}
      {currentPhase === FIRST_SOLUTION && (
        <Heading fontSize={fontSize}>Your Original Prediction</Heading>
      )}
      {currentPhase === MODIFIED_SOLUTION && (
        <Heading fontSize={fontSize}>Your Current Proposal</Heading>
      )}
    </Box>
  );
};

export default SolutionAreaDescription;
