import { Box, Heading, Flex, Progress } from "@chakra-ui/react";

export const Loading = (): JSX.Element => {
  return (
    <Flex justify="center" align="center" h="100vh" direction="column">
      <Box>
        <Heading>Loading Application...</Heading>
        <Progress
          mt={4}
          size="xs"
          isIndeterminate
          bgColor="transparent"
          colorScheme="orange"
        />
      </Box>
    </Flex>
  );
};
