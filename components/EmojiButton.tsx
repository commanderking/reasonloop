import { Text, Button, ButtonProps } from "@chakra-ui/react";

type Props = {
  label: string;
  children: React.Component | string;
  buttonProps?: ButtonProps;
};

const Emoji = ({ label, children, buttonProps }: Props) => {
  return (
    <Button {...buttonProps}>
      <Text aria-label={label}> {children} </Text>
    </Button>
  );
};

export default Emoji;
