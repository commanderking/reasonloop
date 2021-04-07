import {
  Box,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import CoordinateGridSolutionArea from "templates/components/CoordinateGridSolutionArea";

const CoordinateGridContainer = ({ data }) => {
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
        <CoordinateGridSolutionArea data={data} />
      </Box>
    </Box>
  );
};

export default CoordinateGridContainer;
