import React from "react";
import { Box, Text } from "@chakra-ui/react";
import EmojiButton from "components/EmojiButton";
import { reactions } from "components/reactions/constants";

const PeerReviewReactions = ({ onReactionClick, currentReactions }) => {
  return (
    <Box display="inline-block" padding={2}>
      <Text display="inline-block" mr={4}>
        Reactions
      </Text>
      {Object.values(reactions).map((reaction) => {
        const { id } = reaction;
        const isClicked = currentReactions[id];
        return (
          <EmojiButton
            isClicked={isClicked}
            buttonProps={{ onClick: onReactionClick, value: id }}
            label="checkMark"
          >
            {reaction.emoji}
          </EmojiButton>
        );
      })}
    </Box>
  );
};

export default PeerReviewReactions;
