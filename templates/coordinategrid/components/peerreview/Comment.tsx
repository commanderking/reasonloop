import { Box, Text, Textarea } from "@chakra-ui/react";

const Comment = ({ comment, handleCommentChange }) => {
  return (
    <Box>
      <Text>Feedback</Text>
      <Textarea
        value={comment}
        placeholder="Share kudos, give suggestions, ask questions..."
        onChange={handleCommentChange}
      ></Textarea>
    </Box>
  );
};

export default Comment;
