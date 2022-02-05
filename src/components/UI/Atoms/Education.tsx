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
          border={useColorModeValue("1px solid #E2E2E2", `1px solid #2A404B`)}
          animation={{ scale: 1.02 }}
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
              <Text fontSize="sm" fontWeight={500}>
                ICT and Digital Services
              </Text>
              <Text fontSize="sm" fontWeight={500}>
                2020 - present
              </Text>
              <HStack>
                <Wrap>
                  <WrapItem>
                    <Tag colorScheme="purple" rounded="md" size="sm" variant="subtle">
                      <TagLabel>ICT</TagLabel>
                    </Tag>
                  </WrapItem>
                  <WrapItem>
                    <Tag colorScheme="purple" rounded="md" size="sm" variant="subtle">
                      <TagLabel>Programming</TagLabel>
                    </Tag>
                  </WrapItem>
                  <WrapItem>
                    <Tag colorScheme="purple" rounded="md" size="sm" variant="subtle">
                      <TagLabel>Entrepreneurship</TagLabel>
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
