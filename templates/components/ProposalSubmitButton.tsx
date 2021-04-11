import { Box, Button } from "@chakra-ui/react";

const getSubmitButtonText = (currentPhase) => {
  if (currentPhase === "PREDICTION") {
    return "Submit Prediction";
  }

  return "Modify Proposal";
};

export const ProposalSubmitButton = ({ addedIcons, currentPhase }) => {
  return (
    <Box>
      <Button
        onClick={() => {
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
        }}
      >
        {getSubmitButtonText(currentPhase)}
      </Button>
    </Box>
  );
};
