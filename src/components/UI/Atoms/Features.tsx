import {
  Badge,
  Box,
  Heading,
  HStack,
  ListItem,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import { colors } from "../../../theme/foundations/colors";

export const Features: React.FC = () => (
  <Box
    bg={useColorModeValue("#FFF", "boxes")}
    borderLeft={`3px solid ${colors.mainOrange}`}
    rounded="md"
    shadow="sm"
    mt={20}
    h="auto"
    p={3}
  >
    <Heading fontSize={20} textDecor="none" color={useColorModeValue("457b9d", "mainOrange")}>
      Features in this version
    </Heading>
    <UnorderedList>
      <ListItem>
        <HStack>
          <Link to="/projects/realtimechat-details">
            <Heading
              size="xs"
              color={useColorModeValue("#534436", "#fff")}
              textDecor="none"
              _hover={{ color: "orange" }}
            >
              New chat project
              <Badge colorScheme="orange" variant="subtle" ml={1}>
                New
              </Badge>
            </Heading>
          </Link>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack>
          <Link to="/story">
            <Heading
              size="xs"
              color={useColorModeValue("#534436", "#fff")}
              textDecor="none"
              _hover={{ color: "orange" }}
            >
              Developer story page
              <Badge colorScheme="orange" variant="subtle" ml={1}>
                New
              </Badge>
            </Heading>
          </Link>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack>
          <Heading
            size="xs"
            color={useColorModeValue("#534436", "#fff")}
            textDecor="none"
            _hover={{ color: "orange" }}
          >
            Uses system color mode as theme
            <Badge colorScheme="orange" variant="subtle" ml={1}>
              New
            </Badge>
          </Heading>
        </HStack>
      </ListItem>
    </UnorderedList>
  </Box>
);
