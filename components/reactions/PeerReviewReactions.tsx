import React from "react";
import { Box } from "@chakra-ui/react";
import EmojiButton from "components/EmojiButton";
import { reactions } from "components/reactions/constants";

const PeerReviewReactions = ({ handleClick }) => {
  return (
    <Box>
      {Object.values(reactions).map((reaction) => {
        return (
          <EmojiButton buttonProps={{ onClick: handleClick }} label="checkMark">
            {reaction.emoji}
          </EmojiButton>
        );
      })}
    </Box>
  );
};

export default PeerReviewReactions;
