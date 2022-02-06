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
  Text,
  Center,
  Flex,
} from "@chakra-ui/react";
import { MBox } from "../../motion/MotionBox";
import { StaticImage } from "gatsby-plugin-image";
import { FaGraduationCap } from "react-icons/fa";

export const Education = () => (
  <Box mt={14}>
    <HStack mb={5}>
      <Heading>Education</Heading>
      <FaGraduationCap fontSize={32} />
    </HStack>
    <MBox
      height="auto"
      border={useColorModeValue("1px solid #E2E2E2", `1px solid #2A404B`)}
      animation={{ y: -3 }}
      width="auto"
    >
      <HStack align="center" spacing={4} p={2}>
        <Box>
          <Center
            height="80px"
            width="80px"
            p={1}
            rounded="full"
            bg={useColorModeValue("gray.100", "gray.900")}
          >
            <StaticImage
              src="../../../images/315f6f8c-0795-46b7-9c87-9f69a44a9d81.png"
              alt="education logo"
              placeholder="blurred"
              layout="fixed"
              width={110}
              height={110}
            />
          </Center>
        </Box>
        <VStack align="baseline">
          <Flex direction="row" justify="space-between" align="center">
            <Heading size="md" fontWeight="600">
              Haaga-Helia UAS
            </Heading>
            <Box ml={2}>
              <Text fontSize="sm" fontWeight={500} color="gray">
                2020 - present
              </Text>
            </Box>
          </Flex>
          <Text fontSize="sm" fontWeight={500}>
            ICT and Digital Services
          </Text>
          <HStack>
            <Wrap>
              <WrapItem>
                <Tag colorScheme="orange" rounded="md" size="sm" variant="subtle">
                  <TagLabel>ICT</TagLabel>
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag colorScheme="orange" rounded="md" size="sm" variant="subtle">
                  <TagLabel>Programming</TagLabel>
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag colorScheme="orange" rounded="md" size="sm" variant="subtle">
                  <TagLabel>Entrepreneurship</TagLabel>
                </Tag>
              </WrapItem>
            </Wrap>
          </HStack>
        </VStack>
      </HStack>
    </MBox>
  </Box>
);
