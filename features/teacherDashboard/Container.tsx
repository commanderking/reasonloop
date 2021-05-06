import { Box, Heading, Grid, Text } from "@chakra-ui/react";
import { getCustomProjects } from "templates/coordinategrid/requests";

const TeacherDashboardContainer = () => {
  const projects = getCustomProjects();
  return (
    <Box>
      <Heading>My Custom Projects</Heading>

      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={4}>
        {projects.map((project, index) => {
          return (
            <Box
              padding={5}
              border="1px solid lightgray"
              borderRadius={5}
              key={`${project.id}-project-card-${index}`}
            >
              <Heading fontSize="xl">{project.name}</Heading>
              <Text mt={4}>{project.overview}</Text>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TeacherDashboardContainer;
