import { Box, Flex, Button, useDisclosure, Image } from "@chakra-ui/react";

// import { ModalImage} from "./Modal/AddImage";

export const Header = (): JSX.Element => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bgColor="pGray.800">
        <Flex
          justify="space-between"
          align="center"
          maxW={1120}
          mx="auto"
          px={20}
          py={6}
        >
          <Image src="logo.svg" alt="logo" h={10} />
          <Button onClick={() => onOpen()}>Add Image</Button>
        </Flex>
      </Box>
    </>
  );
};
