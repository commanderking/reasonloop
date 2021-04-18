import React from "react";
import { Box } from "@chakra-ui/react";
import EmojiButton from "components/EmojiButton";
import { reactions } from "components/reactions/constants";

const PeerReviewReactions = () => {
  return (
    <Box>
      {Object.values(reactions).map((reaction) => {
        return <EmojiButton label="checkMark">{reaction.emoji}</EmojiButton>;
      })}
    </Box>
  );
};

export default PeerReviewReactions;
