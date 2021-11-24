import React from "react";
import { PageScaleFade } from "../components/motion/transitions";
import { motion } from "framer-motion";
import { skillsContainer, skillsItem } from "../components/motion/transitions";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box, HStack, VStack, useColorModeValue, Heading, SimpleGrid } from "@chakra-ui/react";
import { MBox } from "../components/motion/MotionBox";
import { graphql } from "gatsby";
import { FaChartPie } from "react-icons/fa";
import Seo from "../components/seo";

const Skills = ({ data }: any) => {
  const skills = data?.allTechStackJson?.edges;

  return (
    <PageScaleFade>
      <Seo title="Skills" />
      <Box mt="3" w={[null, null, "70%"]} mx="auto" px={[4, 6, 0, 0]}>
        <Box align="center" justify="center">
          <HStack align="center" justify="center">
            <Heading>Skills</Heading>
            <FaChartPie fontSize={28} />
          </HStack>
          <Heading size="md" mt={4}>
            Languages, technologies, and tools I'm familiar with.
          </Heading>
        </Box>
        <Box mt="8">
          <motion.div variants={skillsContainer} initial="hidden" animate="show">
            <SimpleGrid columns={[1, 2, 2, 2]} spacingX={6} spacingY={4}>
              {skills.map(({ node }: any) => {
                const image = getImage(node.image.childImageSharp);
                return (
                  <motion.div variants={skillsItem} key={node.name}>
                    <MBox
                      width="auto"
                      height={20}
                      px={2}
                      py={3}
                      animation={{ y: -6.25 }}
                      shadow={useColorModeValue("lg", "xl")}
                      border={useColorModeValue("1px solid #E2E2E2", `1px solid #2A404B`)}
                    >
                      <HStack>
                        <Box
                          bg={useColorModeValue("navLightHover", "navDarkHover")}
                          rounded="lg"
                          p={1}
                        >
                          <GatsbyImage alt={node.name} image={image} height={50} width={50} />
                        </Box>
                        <VStack>
                          <Box
                            as="a"
                            onClick={() => window.open(`${node.link}`)}
                            _hover={{ color: node.color }}
                          >
                            <Heading size="md" fontSize={18} fontWeight={500} mt={2}>
                              {node.name}
                            </Heading>
                            <Box>
                              <Heading size="sm" mt="1" color="grey">
                                {node.description}
                              </Heading>
                            </Box>
                          </Box>
                        </VStack>
                      </HStack>
                    </MBox>
                  </motion.div>
                );
              })}
            </SimpleGrid>
          </motion.div>
        </Box>
      </Box>
    </PageScaleFade>
  );
};

export const _query = graphql`
  query {
    allTechStackJson {
      edges {
        node {
          color
          description
          link
          name
          type
          image {
            childImageSharp {
              gatsbyImageData(layout: FIXED, quality: 50, height: 30, width: 30)
            }
          }
        }
      }
    }
  }
`;

export default Skills;
