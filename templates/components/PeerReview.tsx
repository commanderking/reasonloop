import useSWR from "swr";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const fetcher = (args) => fetch(args).then((res) => res.json());

const PeerProposalReview = () => {
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
    </Box>
  );
};

export default PeerProposalReview;
