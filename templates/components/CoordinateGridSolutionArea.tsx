import { Box } from "@chakra-ui/react";
import { CoordinateGrid } from "open-math-tools";
import { useState } from "react";
import _ from "lodash";
import { ProposalSubmitButton } from "templates/components/ProposalSubmitButton";

const CoordinateGridActions = {
  ADD_ICON: "ADD_ICON",
  REMOVE_ICON: "REMOVE_ICON",
};

const CoordinateGridSolutionArea = ({
  initialIcons,
  initialAddedIcons,
  isEditable,
  currentPhase,
  onOpen,
}) => {
  const [addedIcons, setAddedIcons] = useState(initialAddedIcons);

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

  const getAddableIconProp = (isEditable: boolean) => {
    if (!isEditable) {
      return null;
    }

    return {
      addableIcon: {
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
      },
    };
  };

  return (
    <Box>
      <Box width={500} margin="auto">
        <CoordinateGrid
          id="coordinate grid"
          gridHeight={500}
          gridWidth={500}
          initialIcons={initialIcons}
          onIconClick={handleIconClick}
          {...getAddableIconProp(isEditable)}
        />
      </Box>
      <ProposalSubmitButton
        addedIcons={addedIcons}
        currentPhase={currentPhase}
        onOpen={onOpen}
      />
    </Box>
  );
};

export default CoordinateGridSolutionArea;
