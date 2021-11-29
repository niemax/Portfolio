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
} from "@chakra-ui/react";
import Seo from "../components/seo";
import { Memoji } from "../components/UI/Atoms/Memoji";
import { PageScaleFade } from "../components/motion/transitions";
import { Introduction } from "../components/UI/Atoms/Introduction";
import { Recents } from "../components/UI/Atoms/Recents";
import { Link } from "gatsby";

const IndexPage = () => (
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
              bg={useColorModeValue("#F2F2F0", "boxes")}
              borderLeft="3px solid #155E63"
              rounded="md"
              shadow="sm"
              mt={20}
              h="auto"
              p={3}
            >
              <Heading fontSize={20} textDecor="none" color="#155E63">
                Features in this version
              </Heading>
              <HStack>
                <UnorderedList>
                  <ListItem>
                    <Link to="/projects">
                      <Heading
                        as="a"
                        size="xs"
                        color={useColorModeValue("#534436", "#fff")}
                        textDecor="none"
                        _hover={{ color: "green" }}
                      >
                        Project details in projects page
                      </Heading>
                    </Link>
                  </ListItem>
                </UnorderedList>
                <Badge colorScheme="teal" variant="subtle">
                  New
                </Badge>
              </HStack>
            </Box>
            <Recents />
          </section>
        </Flex>
      </Flex>
    </PageScaleFade>
  </Flex>
);

export default IndexPage;
