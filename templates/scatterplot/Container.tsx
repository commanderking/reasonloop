import { useState } from "react";
import { Box, Heading, Text, Textarea, Button } from "@chakra-ui/react";
import data from "data/high_school_2020.json";
import AllItemsTable from "templates/scatterplot/components/AllItemsTable";

const ScatterPlotContainer = () => {
  const [answer, setAnswer] = useState("");
  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setAnswer(inputValue);
  };

  return (
    <Box>
      <Heading>Project - Trends in Philadelphia School Districts</Heading>
      <Text>Pick 5-10 high schools that you recognize!</Text>
      <Box>
        <Text>
          What are some things you notice about the schools you've selected?
        </Text>
        <Textarea
          value={answer}
          onChange={handleInputChange}
          placeholder="The high school with the highest graduation rate is... &#10;All high schools... &#10;It seems schools that have a higher..."
        />
      </Box>
      <Button colorScheme="teal">Submit</Button>
      <AllItemsTable data={data} />
    </Box>
  );
};

export default ScatterPlotContainer;
