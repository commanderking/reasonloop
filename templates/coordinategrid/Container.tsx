import { useState } from "react";
import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import CoordinateGridSolutionArea from "templates/coordinategrid/components/CoordinateGridSolutionArea";
import SolutionAreaDescription from "templates/coordinategrid/components/SolutionAreaDescription";
import {
  getCurrentPhase,
  getDefaultIconCoordinates,
  getPlacedIconCoordinates,
} from "templates/coordinategrid/utils";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";
import ProjectDescription from "templates/coordinategrid/components/ProjectDescription";
import PhaseCompletionPrompt from "templates/coordinategrid/components/PhaseCompletionPrompt";
import ModifyProposalModal from "templates/coordinategrid/components/ModifyProposalModal";
import LearningResources from "templates/coordinategrid/components/LearningResources";
import PeerReview from "templates/coordinategrid/components/peerreview/Container";

const CoordinateGridContainer = ({ data }) => {
  // This will be API call in the future
  const submittedSolutions =
    (window && JSON.parse(window.localStorage.getItem("solutions"))) || [];
  const [userSolutions, setSolutions] = useState(submittedSolutions);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const currentPhase = getCurrentPhase(userSolutions);

  console.log("data", data.projectData);
  const projectDefaultCoordinates = getDefaultIconCoordinates(data.projectData);

  const mostRecentSolutionCoordinates = getPlacedIconCoordinates(userSolutions);

  const allIcons = [
    ...projectDefaultCoordinates,
    ...mostRecentSolutionCoordinates,
  ];

  return (
    <Box>
      <Box>Current Phase: {currentPhase}</Box>
      <Box>
        <Heading>{data.name}</Heading>
      </Box>

      <PhaseCompletionPrompt data={data} currentPhase={currentPhase} />
      {currentPhase === CoordinateGridPhases.PREDICTION && (
        <ProjectDescription data={data} />
      )}

      <Box mt={8}>
        <SolutionAreaDescription currentPhase={currentPhase} />
        <CoordinateGridSolutionArea
          isEditable={currentPhase === CoordinateGridPhases.PREDICTION}
          initialIcons={allIcons}
          initialAddedIcons={mostRecentSolutionCoordinates}
          currentPhase={currentPhase}
          onOpen={onOpen}
        />
      </Box>
      <ModifyProposalModal
        isOpen={isOpen}
        onClose={onClose}
        mostRecentSolutionCoordinates={allIcons}
      />

      {currentPhase !== CoordinateGridPhases.PREDICTION && (
        <LearningResources data={data} />
      )}
      {currentPhase === CoordinateGridPhases.MODIFIED_PROPOSAL && (
        <PeerReview projectDefaultCoordinates={projectDefaultCoordinates} />
      )}
    </Box>
  );
};

export default CoordinateGridContainer;
