import { useState, useMemo } from "react";
import _ from "lodash";

import {
  Box,
  Text,
  Button,
  Select,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import ClosableTags from "templates/scatterplot/components/ClosableTags";

const SchoolsSelection = ({ schools }) => {
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
      <Text>Pick 5-10 high schools that you recognize!</Text>
      <FormControl id="school">
        <Stack direction="row" align="center">
          <Box>
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
            onClick={() => {
              setAddedSchools([...addedSchools, schoolsById[currentSchoolId]]);
            }}
          >
            Add School
          </Button>
        </Stack>
      </FormControl>
      <ClosableTags
        tags={addedSchoolsTags}
        onCloseClick={(tag) => {
          removeSchool(addedSchools, tag.id);
        }}
      />
    </Box>
  );
};

export default SchoolsSelection;
