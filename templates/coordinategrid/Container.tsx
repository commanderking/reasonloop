import { useState } from "react";
import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import CoordinateGridSolutionArea from "templates/components/CoordinateGridSolutionArea";
import SolutionAreaDescription from "templates/components/SolutionAreaDescription";
import { getCurrentPhase } from "templates/coordinategrid/utils";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";
import ProjectDescription from "templates/components/ProjectDescription";
import PhaseCompletionPrompt from "templates/components/PhaseCompletionPrompt";
import ModifyProposalModal from "templates/components/ModifyProposalModal";
import LearningResources from "templates/components/LearningResources";

const CoordinateGridContainer = ({ data }) => {
  // This will be API call in the future
  const submittedSolutions =
    (window && JSON.parse(window.localStorage.getItem("solutions"))) || [];
  const [solutions, setSolutions] = useState(submittedSolutions);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const currentPhase = getCurrentPhase(solutions);

  const mostRecentSolutionCoordinates = (solutions[0]?.solution || []).map(
    (coordinate) => {
      const { x, y } = coordinate;
      return {
        x,
        y,
        size: 20,
        image: "/cell-tower.svg",
        canRemove: true,
      };
    }
  );

  const initialIcons = [
    ...data.projectData.map((coordinate) => ({
      ...coordinate,
      size: 15,
      image: "/home-icon.svg",
      canRemove: false,
    })),
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
          initialIcons={initialIcons}
          initialAddedIcons={mostRecentSolutionCoordinates}
          currentPhase={currentPhase}
          onOpen={onOpen}
        />
      </Box>
      <ModifyProposalModal
        isOpen={isOpen}
        onClose={onClose}
        mostRecentSolutionCoordinates={initialIcons}
      />

      {currentPhase !== CoordinateGridPhases.PREDICTION && (
        <LearningResources data={data} />
      )}
    </Box>
  );
};

export default CoordinateGridContainer;
