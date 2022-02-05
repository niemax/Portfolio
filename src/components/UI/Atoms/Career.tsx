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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fromDownToUp, fromDownToUpItem } from "../../motion/transitions";
import { MBox } from "../../motion/MotionBox";
import { StaticImage } from "gatsby-plugin-image";
import { FaGraduationCap } from "react-icons/fa";

const Career = () => (
  <Box mt={14}>
    <HStack mb={5}>
      <Heading>Career</Heading>
      <FaGraduationCap fontSize={32} />
    </HStack>
    <motion.div variants={fromDownToUp} initial="hidden" animate="show">
      <motion.div variants={fromDownToUpItem}>
        <MBox
          height="auto"
          border={useColorModeValue("", `1px solid #2A404B`)}
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
              <Heading size="sm">Junior Software Engineer</Heading>
              <Heading size="sm">Feb 2022 - present</Heading>
              <HStack>
                <Wrap>
                  <WrapItem>
                    <Tag colorScheme="whatsapp" rounded="md" size="sm" variant="subtle">
                      <TagLabel>React</TagLabel>
                    </Tag>
                  </WrapItem>
                  <WrapItem>
                    <Tag colorScheme="whatsapp" rounded="md" size="sm" variant="subtle">
                      <TagLabel>React-Native</TagLabel>
                    </Tag>
                  </WrapItem>
                  <WrapItem>
                    <Tag colorScheme="whatsapp" rounded="md" size="sm" variant="subtle">
                      <TagLabel>JavaScript</TagLabel>
                    </Tag>
                  </WrapItem>
                  <WrapItem>
                    <Tag colorScheme="whatsapp" rounded="md" size="sm" variant="subtle">
                      <TagLabel>TypeScript</TagLabel>
                    </Tag>
                  </WrapItem>
                </Wrap>
              </HStack>
            </VStack>
          </HStack>
        </MBox>
      </motion.div>
    </motion.div>
  </Box>
);

export default Career;
