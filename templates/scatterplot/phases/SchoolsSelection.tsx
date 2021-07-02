import { useState, useMemo } from "react";
import _ from "lodash";

import {
  Box,
  Heading,
  Text,
  Tooltip,
  SimpleGrid,
  Button,
  FormControl,
  Divider,
} from "@chakra-ui/react";
import ClosableTags from "templates/scatterplot/components/ClosableTags";
import { phases } from "templates/scatterplot/constants/phases";

const SchoolsSelection = ({ schools, setCurrentPhase }) => {
  const [addedSchools, setAddedSchools] = useState([]);

  const schoolsById = useMemo(() => {
    return _.keyBy(schools, "schoolId");
  }, [schools]);

  const addedSchoolsById = useMemo(() => {
    return _.keyBy(addedSchools, "schoolId");
  }, [addedSchools]);

  const addedSchoolsTags = useMemo(() => {
    return addedSchools.map((school) => {
      return {
        id: school.schoolId,
        label: school.name,
      };
    });
  }, [addedSchools]);

  const removeSchool = (schools, removedSchoolId) => {
    const newSchools = schools.filter(
      (school) => school.schoolId !== removedSchoolId
    );
    setAddedSchools(newSchools);
  };

  const addedSchoolsCount = addedSchools.length;
  const tooFewSchools = addedSchoolsCount < 5;
  const tooManySchools = addedSchoolsCount > 10;

  return (
    <Box>
      <Heading mb={4} size="md">
        Pick 5-10 high schools that you recognize!
      </Heading>
      <FormControl id="school">
        <Box
          maxWidth={500}
          p={4}
          border="1px solid black"
          overflowY="scroll"
          maxHeight={500}
        >
          {schools.map((school) => {
            const isAdded = addedSchoolsById[school.schoolId];
            return (
              <SimpleGrid
                key={school.schoolId}
                templateColumns={"375px 100px"}
                borderBottom="1px solid gray"
                pt={3}
                pb={3}
              >
                <Text maxWidth="400px" isTruncated>
                  {school.name}
                </Text>
                <Button
                  maxWidth="50px"
                  size="xs"
                  onClick={() => {
                    setAddedSchools([
                      ...addedSchools,
                      schoolsById[school.schoolId],
                    ]);
                  }}
                  colorScheme={isAdded ? "gray" : "teal"}
                  disabled={isAdded}
                >
                  {isAdded ? "Added" : "Add"}
                </Button>
              </SimpleGrid>
            );
          })}
        </Box>
      </FormControl>
      <Box mt={8}>
        <Heading mb={4} size="md">
          Added Schools
        </Heading>
        {addedSchoolsTags.length ? (
          <ClosableTags
            tags={addedSchoolsTags}
            onCloseClick={(tag) => {
              removeSchool(addedSchools, tag.id);
            }}
          />
        ) : (
          <Text as="i">No Schools Added Yet</Text>
        )}
      </Box>
      <Divider mt={8} />
      <Box mt={4}>
        {(tooFewSchools || tooManySchools) && (
          <Box>
            <Text fontSize="lg" as="i" color="red.600">
              Please select between 5-10 schools before submitting.
            </Text>
          </Box>
        )}
        <Button
          onClick={() => {
            setCurrentPhase(phases.SCHOOLS_SELECTION_INITIAL_REFLECTION);
          }}
          colorScheme="teal"
          isDisabled={tooFewSchools || tooManySchools}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default SchoolsSelection;
