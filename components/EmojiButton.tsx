import { Text, Button, ButtonProps } from "@chakra-ui/react";

type Props = {
  label: string;
  children: React.Component | string;
  buttonProps?: ButtonProps;
  isClicked?: boolean;
};

const EmojiButton = ({
  label,
  children,
  buttonProps,
  isClicked = false,
}: Props) => {
  console.log("isClicked", isClicked);
  return (
    <Button
      colorScheme="teal"
      variant={isClicked ? "solid" : "outline"}
      {...buttonProps}
    >
      <Text pointerEvents="none" aria-label={label}>
        {children}
      </Text>
    </Button>
  );
};

export default EmojiButton;
