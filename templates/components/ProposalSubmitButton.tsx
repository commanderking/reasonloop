import { Box, Button, useDisclosure } from "@chakra-ui/react";

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
    const solution = {
      solution: addedIcons,
    };

    // TODO: This is placeholder for real submit behavior (leveraging local storage)
    if (window) {
      window.localStorage.setItem(
        "solutions",
        JSON.stringify([
          ...(JSON.parse(window.localStorage.getItem("solutions")) || []),
          solution,
        ])
      );
      location.reload();
    }
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
