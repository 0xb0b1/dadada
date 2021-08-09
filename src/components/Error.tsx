import { Button, Heading, Flex } from "@chakra-ui/react";

export const Error = (): JSX.Element => {
  return (
    <Flex justify="center" align="center" h="100vh" direction="column">
      <Heading>An error has ocurred</Heading>
      <Button py={6} onClick={() => window.location.reload()} mt={4}>
        Try again
      </Button>
    </Flex>
  );
};
