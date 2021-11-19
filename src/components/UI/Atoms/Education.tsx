import React from "react";
import { Heading, Box, VStack, HStack, useColorModeValue, Tag, TagLabel } from "@chakra-ui/react";
import { LineBreak } from "./LineBreak";
import { motion } from "framer-motion";
import { container, item } from "../../motion/transitions";
import { MBox } from "../../motion/MotionBox";
import { StaticImage } from "gatsby-plugin-image";

export const Education = () => {
  return (
    <Box mt={14}>
      <Heading>Education</Heading>
      <LineBreak width="8rem" mb={5} marginTop={2} />
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <MBox
            height="auto"
            rounded="md"
            border={useColorModeValue("", `1px solid #2A404B`)}
            animation={{ scale: 1.02 }}
            shadow="md"
            py={2}
            width="auto"
          >
            <HStack align="center" spacing={4} p={2}>
              <Box
                height={120}
                width={120}
                rounded="full"
                align="center"
                justify="center"
                bg={useColorModeValue("navLightHover", "navDarkHover")}
              >
                <StaticImage
                  src="../../../images/315f6f8c-0795-46b7-9c87-9f69a44a9d81.png"
                  alt="education logo"
                  placeholder="blurred"
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
                <HStack>
                  <Tag colorScheme="cyan" rounded="md" size="sm" variant="subtle">
                    <TagLabel>ICT</TagLabel>
                  </Tag>
                  <Tag colorScheme="cyan" rounded="md" size="sm" variant="subtle">
                    <TagLabel>Programming</TagLabel>
                  </Tag>
                  <Tag colorScheme="cyan" rounded="md" size="sm" variant="subtle">
                    <TagLabel>Entrepreneurship</TagLabel>
                  </Tag>
                </HStack>
              </VStack>
            </HStack>
          </MBox>
        </motion.div>
      </motion.div>
    </Box>
  );
};
