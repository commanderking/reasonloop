import { useState } from "react";

import { Box, Divider, Button, Textarea, Heading } from "@chakra-ui/react";
import AllItemsTable from "templates/scatterplot/components/AllItemsTable";

const questions = [];

const SchoolSelectionReflection = ({ schools }) => {
  const [answer, setAnswer] = useState("");
  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setAnswer(inputValue);
  };

  const maxWidth = 800;

  return (
    <Box maxWidth={maxWidth} margin="auto">
      <Heading size="md">Your Added Schools</Heading>
      <Box mt={4}>
        <AllItemsTable data={schools} />
      </Box>
      <Heading mt={8} size="md">
        What are some things you notice about the schools you've selected?
      </Heading>
      <Box padding={4} margin="auto" mt={4}>
        <Textarea
          border="1px solid teal"
          value={answer}
          onChange={handleInputChange}
          placeholder="The high school with the highest graduation rate is... &#10;All high schools... &#10;It seems schools that have a higher..."
        />
        <Button onClick={() => {}} colorScheme="teal">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default SchoolSelectionReflection;
