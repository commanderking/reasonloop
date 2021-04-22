import { Fragment, useState } from "react";
import { Box, Heading, useDisclosure, Divider, Button } from "@chakra-ui/react";
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

  const projectDefaultCoordinates = getDefaultIconCoordinates(data.projectData);

  const mostRecentSolutionCoordinates = getPlacedIconCoordinates(userSolutions);

  const allIcons = [
    ...projectDefaultCoordinates,
    ...mostRecentSolutionCoordinates,
  ];

  return (
    <Box>
      <Box>
        <Heading>{data.name}</Heading>
      </Box>

      <Box mt={8}>
        <PhaseCompletionPrompt data={data} currentPhase={currentPhase} />
        {currentPhase === CoordinateGridPhases.PREDICTION && (
          <ProjectDescription data={data} />
        )}
      </Box>

      <Box
        padding={8}
        mt={8}
        ml={20}
        mr={20}
        textAlign="center"
        border="1px solid lightgray"
      >
        <SolutionAreaDescription currentPhase={currentPhase} />
        <CoordinateGridSolutionArea
          isEditable={currentPhase === CoordinateGridPhases.PREDICTION}
          initialIcons={allIcons}
          initialAddedIcons={mostRecentSolutionCoordinates}
          currentPhase={currentPhase}
          onOpen={onOpen}
          margin={"auto"}
        />
      </Box>

      <Box mt={8}>
        {currentPhase === CoordinateGridPhases.MODIFY_PROPOSAL && (
          <PeerReview projectDefaultCoordinates={projectDefaultCoordinates} />
        )}

        {currentPhase !== CoordinateGridPhases.PREDICTION && (
          <Fragment>
            <LearningResources data={data} />
            <Divider mt={8} />
          </Fragment>
        )}
      </Box>
      <ModifyProposalModal
        isOpen={isOpen}
        currentPhase={currentPhase}
        onClose={onClose}
        mostRecentSolutionCoordinates={allIcons}
      />
    </Box>
  );
};

export default CoordinateGridContainer;
