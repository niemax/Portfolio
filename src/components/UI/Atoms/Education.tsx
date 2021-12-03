import React from "react";
import {
  Heading,
  Box,
  Stack,
  VStack,
  HStack,
  useColorModeValue,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fromDownToUp, fromDownToUpItem } from "../../motion/transitions";
import { MBox } from "../../motion/MotionBox";
import { StaticImage } from "gatsby-plugin-image";
import { FaGraduationCap } from "react-icons/fa";

export const Education = () => (
  <Box mt={14}>
    <HStack mb={5}>
      <Heading>Education</Heading>
      <FaGraduationCap fontSize={32} />
    </HStack>
    <motion.div variants={fromDownToUp} initial="hidden" animate="show">
      <motion.div variants={fromDownToUpItem}>
        <MBox
          height="auto"
          border={useColorModeValue("", `1px solid #2A404B`)}
          animation={{ scale: 1.02 }}
          shadow="md"
          py={2}
          width="auto"
        >
          <HStack align="center" spacing={4} p={2}>
            <Box
              height="auto"
              width="auto"
              p={1}
              rounded="full"
              align="center"
              justify="center"
              bg={useColorModeValue("navLightHover", "navDarkHover")}
            >
              <StaticImage
                src="../../../images/315f6f8c-0795-46b7-9c87-9f69a44a9d81.png"
                alt="education logo"
                placeholder="blurred"
                layout="fixed"
                width={110}
                height={110}
              />
            </Box>
            <VStack align="baseline">
              <Heading size="md" fontWeight="600">
                Haaga-Helia UAS
              </Heading>
              <Heading size="sm">ICT and Digital Services</Heading>
              <Heading size="sm">2020 - present</Heading>
              <Stack direction={["column", "column", "row", "row"]}>
                <Tag colorScheme="teal" rounded="md" size="sm" variant="subtle">
                  <TagLabel>ICT</TagLabel>
                </Tag>
                <Tag colorScheme="teal" rounded="md" size="sm" variant="subtle">
                  <TagLabel>Programming</TagLabel>
                </Tag>
                <Tag colorScheme="teal" rounded="md" size="sm" variant="subtle">
                  <TagLabel>Entrepreneurship</TagLabel>
                </Tag>
              </Stack>
            </VStack>
          </HStack>
        </MBox>
      </motion.div>
    </motion.div>
  </Box>
);
