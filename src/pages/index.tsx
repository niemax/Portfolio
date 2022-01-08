import * as React from "react";
import {
  Flex,
  HStack,
  Box,
  useColorModeValue,
  Heading,
  UnorderedList,
  ListItem,
  Badge,
  Center,
} from "@chakra-ui/react";
import Seo from "../components/seo";
import { Memoji } from "../components/UI/Atoms/Memoji";
import { PageScaleFade } from "../components/motion/transitions";
import { Introduction } from "../components/UI/Atoms/Introduction";
import { Recents } from "../components/UI/Atoms/Recents";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Flex direction="column" align="center" px={[2, 14, 14, 14]}>
      <PageScaleFade>
        <Seo title="Home" />
        <Flex direction={["column", "column", "row"]}>
          <Flex direction="column" align="self-start">
            <HStack align="center" justify="center" mx="auto">
              <Memoji width={150} height={150} padding={3} />
            </HStack>
            <section>
              <Introduction />
              <Box
                bg={useColorModeValue("#FFF", "boxes")}
                borderLeft="3px solid #B1D8B7"
                rounded="md"
                shadow="sm"
                mt={20}
                h="auto"
                p={3}
              >
                <Heading
                  fontSize={20}
                  textDecor="none"
                  color={useColorModeValue("457b9d", "green")}
                >
                  Features in this version
                </Heading>
                <UnorderedList>
                  <ListItem>
                    <HStack>
                      <Link to="/projects">
                        <Heading
                          size="xs"
                          color={useColorModeValue("#534436", "#fff")}
                          textDecor="none"
                          _hover={{ color: "green" }}
                        >
                          New chat project
                          <Badge colorScheme="teal" variant="subtle" ml={1}>
                            New
                          </Badge>
                        </Heading>
                      </Link>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <Link to="/projects">
                        <Heading
                          size="xs"
                          color={useColorModeValue("#534436", "#fff")}
                          textDecor="none"
                          _hover={{ color: "green" }}
                        >
                          Redesigned skills page
                          <Badge colorScheme="teal" variant="subtle" ml={1}>
                            New
                          </Badge>
                        </Heading>
                      </Link>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <Link to="/projects">
                        <Heading
                          size="xs"
                          color={useColorModeValue("#534436", "#fff")}
                          textDecor="none"
                          _hover={{ color: "green" }}
                        >
                          New projects page
                          <Badge colorScheme="teal" variant="subtle" ml={1}>
                            New
                          </Badge>
                        </Heading>
                      </Link>
                    </HStack>
                  </ListItem>
                </UnorderedList>
              </Box>
              <Recents />
            </section>
          </Flex>
        </Flex>
      </PageScaleFade>
    </Flex>
  );
};

export default IndexPage;
