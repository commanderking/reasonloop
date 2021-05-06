import { useEffect } from "react";
import { Box, Heading, Grid, Text, Button } from "@chakra-ui/react";
import { getCustomProjects } from "templates/coordinategrid/requests";
import { useAuth } from "store/auth/store";
import { useRouter } from "next/router";

const TeacherDashboardContainer = () => {
  const router = useRouter();
  const { isLoadingUser, user, signOut } = useAuth();

  const projects = getCustomProjects();

  useEffect(() => {
    if (!user && !isLoadingUser) {
      router.push("/teacher/signin");
    }
  }, [user, isLoadingUser]);

  if (isLoadingUser) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Heading>My Custom Projects</Heading>
      <Button onClick={() => signOut()}></Button>
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
