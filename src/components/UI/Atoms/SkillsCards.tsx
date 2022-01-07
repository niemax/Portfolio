import { Box, Heading, HStack, SimpleGrid, useColorModeValue, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { MBox } from "../../motion/MotionBox";
import { skillsContainer, skillsItem } from "../../motion/transitions";

interface SkillsCardsProps {
  skillsData: [];
}

export const SkillsCards = ({ skillsData }: SkillsCardsProps) => {
  return (
    <Box mt="8">
      <motion.div variants={skillsContainer} initial="hidden" animate="show">
        <SimpleGrid columns={[1, 2, 2, 2]} spacingX={6} spacingY={4}>
          {skillsData.map(({ node }: any) => {
            const image = getImage(node.image.childImageSharp);
            return (
              <motion.div variants={skillsItem} key={node.name}>
                <MBox
                  width="auto"
                  height={20}
                  px={2}
                  py={2}
                  animation={{ y: -6.25 }}
                  border={useColorModeValue("1px solid #E2E2E2", `1px solid #2A404B`)}
                >
                  <HStack>
                    <Badge variant="subtle" colorScheme={node.colorScheme} p={1} rounded="md">
                      <GatsbyImage alt={node.name} image={image} height={50} width={50} />
                    </Badge>
                    <Box
                      as="a"
                      onClick={() => window.open(`${node.link}`)}
                      _hover={{ color: node.color }}
                    >
                      <HStack>
                        <Heading size="md" fontSize={18} fontWeight={500} mt={2}>
                          {node.name}
                        </Heading>
                        {Array.from(Array(node.hearts)).map((_, idx) => (
                          <HiOutlineLightningBolt key={idx} />
                        ))}
                      </HStack>
                      <Heading size="xs" mt={1}>
                        {node.description}
                      </Heading>
                    </Box>
                  </HStack>
                </MBox>
              </motion.div>
            );
          })}
        </SimpleGrid>
      </motion.div>
    </Box>
  );
};
