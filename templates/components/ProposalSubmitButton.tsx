import { Box, Button } from "@chakra-ui/react";
import { submitProposal } from "templates/coordinategrid/requests";

const getSubmitButtonText = (currentPhase) => {
  if (currentPhase === "PREDICTION") {
    return "Submit Prediction";
  }

  return "Modify Proposal";
};

const getOnClick = (addedIcons, currentPhase, onOpen) => {
  if (currentPhase !== "PREDICTION") {
    console.log("correct opening");
    return onOpen;
  }

  return () => {
    submitProposal({ addedIcons, activity: [] });
  };
};

export const ProposalSubmitButton = ({ addedIcons, currentPhase, onOpen }) => {
  return (
    <Box textAlign="center">
      <Button onClick={getOnClick(addedIcons, currentPhase, onOpen)}>
        {getSubmitButtonText(currentPhase)}
      </Button>
    </Box>
  );
};
