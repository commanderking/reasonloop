import useSWR from "swr";
import { Box, Heading, Text, OrderedList, ListItem } from "@chakra-ui/react";

const fetcher = (args) => fetch(args).then((res) => res.json());

const ProjectPage = () => {
  const { data, error } = useSWR("/api/project", fetcher);
  console.log("data", data);

  if (!data) {
    return <div></div>;
  }
  return (
    <Box>
      <Box>
        <Heading>{data.name}</Heading>
        <Text>{data.overviewText}</Text>
      </Box>
      <Box>
        <Heading>Details</Heading>
        <OrderedList>
          {data.requirements.map((requirement) => (
            <ListItem>{requirement}</ListItem>
          ))}
        </OrderedList>
      </Box>
      <Heading>What are your initial thoughts?</Heading>
    </Box>
  );
};

export default ProjectPage;
