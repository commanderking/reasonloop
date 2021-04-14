import { Box } from "@chakra-ui/react";
import { CoordinateGrid } from "open-math-tools";
import { useState } from "react";
import _ from "lodash";
import { ProposalSubmitButton } from "templates/components/ProposalSubmitButton";

const CoordinateGridActions = {
  ADD_ICON: "ADD_ICON",
  REMOVE_ICON: "REMOVE_ICON",
};

const ModifyProposalGrid = ({ mostRecentSolutionCoordinates }) => {
  const [activeIcons, setActiveIcons] = useState(mostRecentSolutionCoordinates);
  const [activity, setActivity] = useState([]);

  const handleIconClick = (icon) => {
    if (!icon.canRemove) {
      return;
    }
    const newIcons = activeIcons.filter(
      (currentIcon) => !(currentIcon.x === icon.x && currentIcon.y === icon.y)
    );

    setActiveIcons(newIcons);

    const { x, y } = icon;
    setActivity([
      ...activity,
      { x, y, timestamp: Date.now(), type: CoordinateGridActions.REMOVE_ICON },
    ]);
  };

  return (
    <Box>
      <Box width={500} margin="auto">
        <CoordinateGrid
          id="coordinate grid"
          gridHeight={500}
          gridWidth={500}
          activeIcons={activeIcons}
          onIconClick={handleIconClick}
          addableIcon={{
            onAddIcon: (icon) => {
              const { x, y } = icon;

              const addedIconInfo = {
                x,
                y,
                image: "/cell-tower.svg",
                size: 20,
                timestamp: Date.now(),
                canRemove: true,
              };

              setActiveIcons([...activeIcons, addedIconInfo]);
              console.log("activeIcons", activeIcons);
              setActivity([
                ...activity,
                { ...addedIconInfo, type: CoordinateGridActions.ADD_ICON },
              ]);
            },
          }}
        />
      </Box>
      {/* <ProposalSubmitButton
        addedIcons={addedIcons}
        currentPhase={currentPhase}
        onOpen={onOpen}
      /> */}
    </Box>
  );
};

export default ModifyProposalGrid;
