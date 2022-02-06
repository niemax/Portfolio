import React from "react";
import {
  Heading,
  Box,
  Wrap,
  WrapItem,
  VStack,
  HStack,
  useColorModeValue,
  Tag,
  TagLabel,
  Center,
  Text,
  Flex,
} from "@chakra-ui/react";
import { MBox } from "../../motion/MotionBox";
import { FaBriefcase } from "react-icons/fa";

const Career: React.FC = () => (
  <Box>
    <HStack mb={5}>
      <Heading>Career</Heading>
      <FaBriefcase fontSize={24} />
    </HStack>
    <MBox
      height="auto"
      border={useColorModeValue("1px solid #E2E2E2", `1px solid #2A404B`)}
      animation={{ scale: 1.02 }}
      width="auto"
    >
      <HStack align="center" spacing={4} p={2}>
        <Center
          height="80px"
          width="80px"
          p={1}
          rounded="full"
          bg={useColorModeValue("gray.100", "gray.900")}
        >
          <Heading size="md" fontWeight="600">
            Qvik
          </Heading>
        </Center>
        <VStack align="baseline">
          <Flex justify="space-between">
            <HStack spacing={2}>
              <Box>
                <Heading size="md" fontWeight={600}>
                  Qvik
                </Heading>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight={500} color="gray">
                  Feb 2022 - present
                </Text>
              </Box>
            </HStack>
          </Flex>
          <Text fontSize="sm" fontWeight={500}>
            Junior Software Engineer
          </Text>
          <HStack>
            <Wrap>
              <WrapItem>
                <Tag colorScheme="orange" rounded="md" size="sm" variant="subtle">
                  <TagLabel>React</TagLabel>
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag colorScheme="orange" rounded="md" size="sm" variant="subtle">
                  <TagLabel>React-Native</TagLabel>
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag colorScheme="orange" rounded="md" size="sm" variant="subtle">
                  <TagLabel>JavaScript</TagLabel>
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag colorScheme="orange" rounded="md" size="sm" variant="subtle">
                  <TagLabel>TypeScript</TagLabel>
                </Tag>
              </WrapItem>
            </Wrap>
          </HStack>
        </VStack>
      </HStack>
    </MBox>
  </Box>
);

export default Career;
