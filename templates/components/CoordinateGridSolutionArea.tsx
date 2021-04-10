import { Box, Heading, Button } from "@chakra-ui/react";
import { CoordinateGrid } from "open-math-tools";
import { useState } from "react";
import _ from "lodash";

const CoordinateGridActions = {
  ADD_ICON: "ADD_ICON",
  REMOVE_ICON: "REMOVE_ICON",
};

const CoordinateGridSolutionArea = ({ data }) => {
  const [addedIcons, setAddedIcons] = useState([]);
  const [activity, setActivity] = useState([]);

  const handleIconClick = (icon) => {
    const newIcons = addedIcons.filter(
      (currentIcon) => !(currentIcon.x === icon.x && currentIcon.y === icon.y)
    );

    setAddedIcons(newIcons);

    const { x, y } = icon;
    setActivity([
      ...activity,
      { x, y, timestamp: Date.now(), type: CoordinateGridActions.REMOVE_ICON },
    ]);
  };

  return (
    <Box>
      <Box>
        <CoordinateGrid
          id="coordinate grid"
          gridHeight={500}
          gridWidth={500}
          initialIcons={data.projectData.map((coordinate) => ({
            ...coordinate,
            size: 15,
            image: "/home-icon.svg",
          }))}
          addableIcon={{
            image: "/cell-tower.svg",
            size: 20,
            onAddIcon: (icon) => {
              const { x, y } = icon;

              const addedIconInfo = { x, y, timestamp: Date.now() };

              setAddedIcons([...addedIcons, addedIconInfo]);
              setActivity([
                ...activity,
                { ...addedIconInfo, type: CoordinateGridActions.ADD_ICON },
              ]);
            },
          }}
          onIconClick={handleIconClick}
        />
      </Box>
      <Box>
        <Button
          onClick={() => {
            const solution = {
              solution: addedIcons,
            };

            if (window) {
              window.localStorage.setItem(
                "solutions",
                JSON.stringify([
                  ...(JSON.parse(window.localStorage.getItem("solutions")) ||
                    []),
                  solution,
                ])
              );
              location.reload();
            }
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CoordinateGridSolutionArea;
