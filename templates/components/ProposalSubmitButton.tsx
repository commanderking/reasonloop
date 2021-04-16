import { Box, Button } from "@chakra-ui/react";
import { submitProposal } from "templates/coordinategrid/requests";
import { useRouter } from "next/router";

const getSubmitButtonText = (currentPhase) => {
  if (currentPhase === "PREDICTION") {
    return "Submit Prediction";
  }

  return "Modify Proposal";
};

const getOnClick = (addedIcons, currentPhase, projectId, onOpen) => {
  if (currentPhase !== "PREDICTION") {
    console.log("correct opening");
    return onOpen;
  }

  return () => {
    submitProposal({ addedIcons, activity: [], projectId });
  };
};

export const ProposalSubmitButton = ({ addedIcons, currentPhase, onOpen }) => {
  const router = useRouter();
  const { projectId } = router.query;
  return (
    <Box textAlign="center">
      <Button onClick={getOnClick(addedIcons, currentPhase, projectId, onOpen)}>
        {getSubmitButtonText(currentPhase)}
      </Button>
    </Box>
  );
};
