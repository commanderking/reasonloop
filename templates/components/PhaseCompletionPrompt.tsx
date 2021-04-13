import { Alert, AlertIcon } from "@chakra-ui/react";

export const PhaseCompletionPrompt = ({ data, currentPhase }) => {
  return (
    <Alert status="info">
      <AlertIcon />
      {data.phaseContent[currentPhase].instructions}
    </Alert>
  );
};

export default PhaseCompletionPrompt;
