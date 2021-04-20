import useSWR from "swr";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Solution from "./Solution";
import { getPlacedIconsForSolution } from "templates/coordinategrid/utils";

const fetcher = (args) => fetch(args).then((res) => res.json());

const PeerProposalReview = ({ projectDefaultCoordinates }) => {
  const router = useRouter();
  const { projectId } = router.query;
  const { data, error } = useSWR(
    projectId ? [`/api/solutions/${projectId}`] : null,
    fetcher
  );

  if (!data) {
    return <div>Loading Proposals</div>;
  }
  return (
    <Box>
      <Heading fontSize="2xl">Review Community Proposals</Heading>
      <Text>
        Below are proposals from other members of your community. Take a look!
        It can be useful to provide feedback to help members of the community.
        Or maybe one of the proposals might convince you to modify your own
        proposal.
      </Text>
      {data.map((proposedSolution) => {
        const allPlacedCoordinates = [
          ...projectDefaultCoordinates,
          ...getPlacedIconsForSolution(proposedSolution.solution),
        ];

        return (
          <Box
            key={proposedSolution.id}
            padding={8}
            border="1px solid lightgray"
            borderRadius={5}
            mt={20}
          >
            <Solution allPlacedCoordinates={allPlacedCoordinates} />
          </Box>
        );
      })}
    </Box>
  );
};

export default PeerProposalReview;
