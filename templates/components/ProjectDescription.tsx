import {
  Box,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Button,
  Checkbox,
} from "@chakra-ui/react";

export const ProjectDescription = ({ data }) => {
  return (
    <Box>
      <Box mt={8}>
        <Heading fontSize="2xl">Overview</Heading>
        <Text>{data.overviewText}</Text>
      </Box>
      <Box mt={8}>
        <Heading fontSize="2xl">Details</Heading>
        <OrderedList ml={8}>
          {data.requirements.map((requirement, index) => (
            <ListItem key={`${requirement}-${index}`}>{requirement}</ListItem>
          ))}
        </OrderedList>
      </Box>
    </Box>
  );
};

export default ProjectDescription;
