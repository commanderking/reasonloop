import {
  Box,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { Phase } from "templates/types";

type Props = {
  currentPhase: Phase;
};

export const SolutionAreaDescription = ({ currentPhase }) => {
  return (
    <Box>
      <Heading>What are your initial thoughts?</Heading>
    </Box>
  );
};

export default SolutionAreaDescription;
