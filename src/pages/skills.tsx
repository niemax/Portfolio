import React from 'react';
import { PageScaleFade } from '../components/motion/transitions';
import { motion } from 'framer-motion';
import { skillsContainer, skillsItem } from '../components/motion/transitions';
import { BsLightningCharge } from 'react-icons/bs';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import {
  Box,
  HStack,
  VStack,
  useColorModeValue,
  Heading,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import { MBox } from '../components/motion/MotionBox';
import { graphql } from 'gatsby';
import { LineBreak } from '../components/UI/Atoms/LineBreak';

const Skills = ({ data }: any) => {
  const skills = data?.allTechStackJson?.edges;

  return (
    <Box>
      <PageScaleFade>
        <Box mt="3" w={[null, null, '70%']} mx="auto">
          <Box align="center">
            <Heading>Skills</Heading>
            <LineBreak w="4.8rem" />
          </Box>
          <Heading size="md">Languages, technologies, and tools I'm familiar with.</Heading>
          <Box mt="8">
            <motion.div variants={skillsContainer} initial="hidden" animate="show">
              <SimpleGrid columns={[1, 2, 2, 2]} spacingX={6} spacingY={5}>
                {skills.map(({ node }) => {
                  console.log(node.image.childImageSharp.fixed.src);
                  const image = getImage(node.image.childImageSharp.fixed.src);
                  return (
                    <motion.div variants={skillsItem} key={node.name}>
                      <MBox
                        rounded="lg"
                        height={16}
                        p={2}
                        animation={{ y: -6.25 }}
                        shadow={useColorModeValue('md', 'xl')}
                        borderLeft={`4px solid ${node.color}`}
                      >
                        <HStack>
                          <Box
                            bg={useColorModeValue('navLightHover', 'navDarkHover')}
                            rounded="lg"
                            p={1}
                          >
                            <img
                              alt="tech"
                              src={node.image.childImageSharp.fixed.src}
                              width={25}
                              height={25}
                            />
                          </Box>
                          <VStack>
                            <Box as="a" onClick={() => window.open(`${node.link}`)}>
                              <Heading size="md" fontWeight={600} _hover={{ color: node.color }}>
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
    </Box>
  );
};

export const query = graphql`
  query SkillsQuery {
    allTechStackJson {
      edges {
        node {
          description
          id
          name
          type
          link
          color
          image {
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }
      }
    }
  }
`;

export default Skills;
