import * as React from "react";
import { Flex, HStack, Heading, useToast, Box, useColorModeValue } from "@chakra-ui/react";
import Seo from "../components/seo";
import { Memoji } from "../components/UI/Atoms/Memoji";
import { PageScaleFade } from "../components/motion/transitions";
import { Introduction } from "../components/UI/Atoms/Introduction";
import { Recents } from "../components/UI/Atoms/Recents";
import { MdCheckCircle } from "react-icons/md";
import { windowOpen } from "../utility/helpers/windowOpen";

const IndexPage = () => {
  const toast = useToast();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      toast({
        position: "bottom-left",
        duration: 8000,
        isClosable: true,
        render: () => (
          <Box color={useColorModeValue("black", "white")} bg="cyan" p={3} rounded="lg">
            <HStack>
              <MdCheckCircle fontSize={24} />
              <Heading size="sm">Thanks for tuning in!</Heading>
            </HStack>
            <Heading size="sm">If you have any questions, just hit me up on linkedIn!</Heading>
            <Box
              as="a"
              onClick={() => windowOpen("https://www.linkedin.com/in/axel-nieminen-06a580196/")}
            >
              <Heading size="sm">https://www.linkedin.com/in/axel-nieminen-06a580196/</Heading>
            </Box>
          </Box>
        ),
      });
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Flex direction="column" align="center" px={[0, 0, 0, 14]}>
      <PageScaleFade>
        <Seo title="Home" />
        <Flex direction={["column", "column", "row"]}>
          <Flex direction="column" align="self-start">
            <HStack align="center" justify="center">
              <Memoji width={140} height={140} padding={3} />
            </HStack>
            <Introduction />
            <Recents />
          </Flex>
        </Flex>
      </PageScaleFade>
    </Flex>
  );
};

export default IndexPage;
