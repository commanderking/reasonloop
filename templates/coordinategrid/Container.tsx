import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import CoordinateGridSolutionArea from "templates/components/CoordinateGridSolutionArea";
import SolutionAreaDescription from "templates/components/SolutionAreaDescription";
import { getCurrentPhase } from "templates/coordinategrid/utils";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";
import ProjectDescription from "templates/components/ProjectDescription";

const CoordinateGridContainer = ({ data }) => {
  const submittedSolutions =
    (window && JSON.parse(window.localStorage.getItem("solutions"))) || [];
  const [solutions, setSolutions] = useState(submittedSolutions);

  const currentPhase = getCurrentPhase(solutions);

  const mostRecentSolutionCoordinates = solutions[0]?.solution || [];

  const initialIcons = [
    ...data.projectData.map((coordinate) => ({
      ...coordinate,
      size: 15,
      image: "/home-icon.svg",
    })),
    ...mostRecentSolutionCoordinates.map((coordinate) => {
      const { x, y } = coordinate;
      return {
        x,
        y,
        size: 20,
        image: "/cell-tower.svg",
      };
    }),
  ];

  return (
    <Box>
      <Box>Current Phase: {currentPhase}</Box>
      <Box>
        <Heading>{data.name}</Heading>
      </Box>
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
        />
      </Box>
    </Box>
  );
};

export default CoordinateGridContainer;
