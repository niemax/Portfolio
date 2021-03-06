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
  Spacer,
} from "@chakra-ui/react";
import { MBox } from "../../motion/MotionBox";
import { FaBriefcase } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

const Career = () => {
  const imagePath = "../../../staticImages/qvik.png";
  return (
    <Box>
      <HStack mb={5}>
        <Heading>Career</Heading>
        <FaBriefcase fontSize={24} />
      </HStack>
      <MBox
        height="auto"
        border={useColorModeValue("1px solid #E2E2E2", `1px solid #2A404B`)}
        animation={{ y: -3 }}
        width="auto"
      >
        <HStack align="center" spacing={4} p={2}>
          <Center
            height="80px"
            width="80px"
            p={1}
            rounded="full"
            bg={useColorModeValue("gray.100", "gray.400")}
          >
            <StaticImage src={imagePath} alt="Qvik_logo" />
          </Center>
          <VStack align="baseline">
            <Flex justify="space-between">
              <HStack>
                <Box>
                  <Heading size="md">
                    <a href="https://qvik.com/" style={{ fontWeight: 800 }}>
                      Qvik
                    </a>
                  </Heading>
                </Box>
                <Spacer />
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
                    <TagLabel ml={1}>React</TagLabel>
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
};

export default Career;
