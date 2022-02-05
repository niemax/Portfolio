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
} from "@chakra-ui/react";
import { MBox } from "../../motion/MotionBox";
import { FaBriefcase } from "react-icons/fa";

const Career = () => (
  <Box mt={14}>
    <HStack mb={5}>
      <Heading>Career</Heading>
      <FaBriefcase fontSize={24} />
    </HStack>
    <MBox
      height="auto"
      border={useColorModeValue("1px solid #E2E2E2", `1px solid #2A404B`)}
      animation={{ scale: 1.02 }}
      py={2}
      width="auto"
    >
      <HStack align="center" spacing={4} p={2}>
        <Center
          height={100}
          width={100}
          p={1}
          rounded="full"
          bg={useColorModeValue("navLightHover", "navDarkHover")}
        >
          <Heading size="md" fontWeight="600">
            Qvik
          </Heading>
        </Center>
        <VStack align="baseline">
          <Heading size="md" fontWeight={600}>
            Qvik
          </Heading>
          <Text fontSize="sm" fontWeight={500}>
            Junior Software Engineer
          </Text>
          <Text fontSize="sm" fontWeight={500}>
            Feb 2022 - present
          </Text>
          <HStack>
            <Wrap>
              <WrapItem>
                <Tag colorScheme="purple" rounded="md" size="sm" variant="subtle">
                  <TagLabel>React</TagLabel>
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag colorScheme="purple" rounded="md" size="sm" variant="subtle">
                  <TagLabel>React-Native</TagLabel>
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag colorScheme="purple" rounded="md" size="sm" variant="subtle">
                  <TagLabel>JavaScript</TagLabel>
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag colorScheme="purple" rounded="md" size="sm" variant="subtle">
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
