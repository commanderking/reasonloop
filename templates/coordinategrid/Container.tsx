import {
  Box,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import CoordinateGridSolutionArea from "templates/components/CoordinateGridSolutionArea";
import SolutionAreaDescription from "templates/components/SolutionAreaDescription";
import { getCurrentPhase } from "templates/coordinategrid/utils";
import { useEffect, useState } from "react";

const CoordinateGridContainer = ({ data }) => {
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    // Temporary code to mimic API loading
    const solutions =
      (window && JSON.parse(window.localStorage.getItem("solutions"))) || [];

    setSolutions(solutions);
  }, []);
  const currentPhase = getCurrentPhase(solutions);

  console.log("solutions", solutions);
  console.log("currentPhase", currentPhase);
  return (
    <Box>
      <Box>
        <Heading>{data.name}</Heading>
        <Text>{data.overviewText}</Text>
      </Box>
      <Box>
        <Heading>Details</Heading>
        <OrderedList>
          {data.requirements.map((requirement, index) => (
            <ListItem key={`${requirement}-${index}`}>{requirement}</ListItem>
          ))}
        </OrderedList>
      </Box>
      <Box>
        <SolutionAreaDescription currentPhase={currentPhase} />
        <CoordinateGridSolutionArea data={data} />
      </Box>
    </Box>
  );
};

export default CoordinateGridContainer;
