import React from "react";
import { useRouter } from "next/router";
import { Box, Button, Heading } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import CoordinateGridSolutionArea from "templates/coordinategrid/components/CoordinateGridSolutionArea";
import PeerReviewReactions from "components/reactions/PeerReviewReactions";
import Comment from "templates/coordinategrid/components/peerreview/Comment";
import { useState } from "react";
import { reactionIds } from "components/reactions/constants";

const initialReactionStates = reactionIds.reduce(
  (reactions, currentReaction) => {
    return {
      ...reactions,
      [currentReaction]: false,
    };
  },
  {}
);

const Solution = ({ allPlacedCoordinates, proposalNumber }) => {
  const router = useRouter();
  const { projectId } = router.query;

  const [reactions, setReactions] = useState(initialReactionStates);
  const [comment, setComment] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const onReactionClick = (event) => {
    const reactionId = event.target.value;
    setReactions({
      ...reactions,
      [reactionId]: !reactions[reactionId],
    });
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  if (hasSubmitted) {
    return (
      <Box textAlign="center" padding={16}>
        <Heading fontSize="2xl" mb={8}>
          Feedback Submitted
        </Heading>
        <CheckCircleIcon size="xl" w={16} h={16} color="teal" />
      </Box>
    );
  }

  return (
    <Box textAlign="center">
      <Heading fontSize="lg">Review Proposal {proposalNumber} </Heading>
      <CoordinateGridSolutionArea
        initialIcons={allPlacedCoordinates}
        isEditable={false}
        margin="auto"
      />
      <PeerReviewReactions
        currentReactions={reactions}
        onReactionClick={onReactionClick}
      />
      <Comment comment={comment} handleCommentChange={handleCommentChange} />
      <Button
        colorScheme="teal"
        onClick={() => {
          const feedback = {
            // TODO: inject studentId
            studentId: "",
            projectId,
            reactions,
            comment,
          };

          // Mimic call
          setTimeout(() => {
            setHasSubmitted(true);
          }, 500);
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Solution;
