import React from "react";
import { Box } from "@chakra-ui/react";
import CoordinateGridSolutionArea from "templates/components/CoordinateGridSolutionArea";

const Solution = ({ allPlacedCoordinates }) => {
  return (
    <Box>
      <CoordinateGridSolutionArea
        initialIcons={allPlacedCoordinates}
        isEditable={false}
        margin="inherit"
      />
    </Box>
  );
};

export default Solution;
