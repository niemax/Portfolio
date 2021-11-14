import React from 'react';
import { PageScaleFade } from '../components/motion/transitions';
import { motion } from 'framer-motion';
import { skillsContainer, skillsItem } from '../components/motion/transitions';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { Box, HStack, useColorModeValue, Heading, SimpleGrid } from '@chakra-ui/react';
import { MBox } from '../components/motion/MotionBox';
import { graphql } from 'gatsby';
import { LineBreak } from '../components/UI/Atoms/LineBreak';

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = ({ data }: any) => {
  const skills = data?.allTechStackJson?.edges;

  return (
    <Box>
      <PageScaleFade>
        <Box mt="3" w={[null, null, '70%']} mx="auto">
          <Heading>Skills</Heading>
          <LineBreak w="4.8rem" />
          <Heading size="md">Languages & technologies I'm familiar with.</Heading>
          <Box mt="10">
            <motion.div variants={skillsContainer} initial="hidden" animate="show">
              <SimpleGrid columns={[1, 2, 2, 2]} spacingX={6} spacingY={6}>
                {skills.map(({ node }) => (
                  <motion.div variants={skillsItem} key={node.name}>
                    <MBox
                      rounded="lg"
                      height={16}
                      width="auto"
                      p={2}
                      animation={{ y: -6.25 }}
                      shadow={useColorModeValue('md', 'xl')}
                      borderLeft={`4px solid ${node.color}`}
                    >
                      <HStack>
                        <img alt="tech" src={node.image.childImageSharp.fixed.src} />
                        <Heading size="md">{node.name}</Heading>
                      </HStack>
                    </MBox>
                  </motion.div>
                ))}
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
