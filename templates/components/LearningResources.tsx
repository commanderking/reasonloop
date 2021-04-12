import {
  Box,
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const LearningResources = ({ data }) => {
  return (
    <Box>
      <Heading fontSize="2xl">Learn</Heading>
      <Text>Some learning resources that might help you solve the project</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data.resources.map((resource) => {
          return (
            <GridItem key={resource.title}>
              <LinkBox
                as="article"
                maxW="sm"
                p="5"
                borderWidth="1px"
                rounded="md"
              >
                <LinkOverlay href={resource.href}>
                  <Text fontSize="xl">{resource.title}</Text>
                </LinkOverlay>

                <Text>{resource.description}</Text>
              </LinkBox>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LearningResources;
