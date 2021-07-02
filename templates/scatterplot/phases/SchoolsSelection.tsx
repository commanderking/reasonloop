import { useState, useMemo } from "react";
import _ from "lodash";

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Select,
  Stack,
  FormControl,
  FormLabel,
  Divider,
} from "@chakra-ui/react";
import ClosableTags from "templates/scatterplot/components/ClosableTags";
import { phases } from "templates/scatterplot/constants/phases";

const SchoolsSelection = ({ schools, setCurrentPhase }) => {
  const [currentSchoolId, setCurrentSchoolId] = useState(schools[0]?.schoolId);
  const [addedSchools, setAddedSchools] = useState([]);

  const schoolsById = useMemo(() => {
    return _.keyBy(schools, "schoolId");
  }, [schools]);

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
  return (
    <Box>
      <Heading mb={4} size="md">
        Pick 5-10 high schools that you recognize!
      </Heading>
      <FormControl id="school">
        <Box maxWidth={500}>
          <FormLabel>School</FormLabel>
          <Select
            value={currentSchoolId}
            onChange={(event) => setCurrentSchoolId(event.target.value)}
          >
            {schools.map((school) => {
              return (
                <option key={school.schoolId} value={school.schoolId}>
                  {school.name}
                </option>
              );
            })}
          </Select>
        </Box>
        <Button
          size="sm"
          onClick={() => {
            setAddedSchools([...addedSchools, schoolsById[currentSchoolId]]);
          }}
        >
          Add School
        </Button>
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
        <Button
          onClick={() => {
            setCurrentPhase(phases.SCHOOLS_SELECTION_INITIAL_REFLECTION);
          }}
          colorScheme="teal"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default SchoolsSelection;
