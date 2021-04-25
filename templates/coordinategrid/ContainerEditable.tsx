import { Fragment, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Textarea,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { CoordinateGrid } from "open-math-tools";
import { iconMap } from "constants/icons";
import Image from "next/image";
import { saveCustomProject } from "templates/coordinategrid/requests";

const CoordinateGridContainer = ({ data }) => {
  const [name, setName] = useState(data.name);
  const [overview, setOverview] = useState(data.overview);

  const [placeableIcon, setPlaceableIcon] = useState(
    data.projectData.addableIcon.iconType
  );

  const [activeIcons, setActiveIcons] = useState(
    data.projectData.placedIcons.map((coordinate) => ({
      ...coordinate,
      image: iconMap[coordinate.iconType].src,
      size: 15,
    }))
  );

  const handleIconClick = (icon) => {
    const newIcons = activeIcons.filter(
      (currentIcon) => !(currentIcon.x === icon.x && currentIcon.y === icon.y)
    );

    setActiveIcons(newIcons);
  };

  const availableIcons = Object.values(iconMap);

  return (
    <Box maxWidth={824} margin="auto" mb={150}>
      <Box mt={8}>
        <Heading size="lg">Project Name</Heading>
        <Textarea
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </Box>
      <Box mt={8}>
        <Heading size="lg">Overview</Heading>
        <Textarea
          onChange={(e) => {
            setOverview(e.target.value);
          }}
          value={overview}
        />
      </Box>
      <Box mt={8}>
        <Heading size="lg">Starting Grid</Heading>
        <CoordinateGrid
          id="coordinate grid"
          gridHeight={400}
          gridWidth={400}
          activeIcons={activeIcons}
          onIconClick={handleIconClick}
          addableIcon={{
            // These don't matter when using activeIcons (so need to edit library)
            image: iconMap.HOUSE.src,
            size: 20,
            onAddIcon: (icon) => {
              const { x, y } = icon;

              const addedIconInfo = {
                x,
                y,
                image: iconMap.HOUSE.src,
                size: 15,
                timestamp: Date.now(),
                canRemove: true,
              };

              setActiveIcons([...activeIcons, addedIconInfo]);
            },
          }}
        />
      </Box>
      <Box mt={8}>
        <Text>Placeable Icon (icon student will be able to add)</Text>
        <Box>
          {availableIcons.map((icon) => {
            const isSelectedPlaceableIcon =
              icon.id === placeableIcon ? "teal" : "";
            return (
              <IconButton
                margin={1}
                onClick={() => {
                  setPlaceableIcon(icon.id);
                }}
                border={
                  isSelectedPlaceableIcon ? "3px solid teal" : "3px solid white"
                }
                padding={5}
                aria-label="icon"
                icon={
                  <Image src={icon.src} alt="icon" width="20px" height="20px" />
                }
              />
            );
          })}
        </Box>
      </Box>
      <Box mt={8}>
        <Button
          onClick={() => {
            saveCustomProject({
              ...data,
              name,
              overview,
              projectData: {
                ...data.projectData,
                placedIcons: activeIcons,
                placeableIcon,
              },
              sourceId: data.id,
            });
          }}
          colorScheme="teal"
        >
          Save Custom Project
        </Button>
      </Box>
    </Box>
  );
};

export default CoordinateGridContainer;
