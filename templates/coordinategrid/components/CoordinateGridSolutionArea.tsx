import { Box } from "@chakra-ui/react";
import { CoordinateGrid } from "open-math-tools";
import { useState } from "react";
import _ from "lodash";
import { ProposalSubmitButton } from "templates/coordinategrid/components/ProposalSubmitButton";
import { Phase } from "templates/types";

const CoordinateGridActions = {
  ADD_ICON: "ADD_ICON",
  REMOVE_ICON: "REMOVE_ICON",
};

// TODO" Update Prop Types
type Props = {
  initialIcons: any[];
  initialAddedIcons?: any[];
  isEditable?: boolean;
  currentPhase?: Phase;
  onOpen?: any;
  margin?: string;
};

const CoordinateGridSolutionArea = ({
  initialIcons,
  initialAddedIcons,
  isEditable = true,
  currentPhase,
  onOpen,
  margin,
}: Props) => {
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
        size: 15,
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
      <Box width={400} margin={margin}>
        <CoordinateGrid
          id="coordinate grid"
          gridHeight={400}
          gridWidth={400}
          initialIcons={initialIcons}
          onIconClick={isEditable ? handleIconClick : () => {}}
          {...getAddableIconProp(isEditable)}
        />
      </Box>
      {onOpen && currentPhase && (
        <ProposalSubmitButton
          addedIcons={addedIcons}
          currentPhase={currentPhase}
          onOpen={onOpen}
        />
      )}
    </Box>
  );
};

export default CoordinateGridSolutionArea;
