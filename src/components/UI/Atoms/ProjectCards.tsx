import { motion } from 'framer-motion';
import React from 'react';
import { Heading, Flex, Stack, Tag, IconButton, Box } from '@chakra-ui/react';
import { MBox } from '../../motion/MotionBox';
import { container, item } from '../../motion/transitions';
import { ProjectCardsProps } from '../../../interfaces';
import { projectData } from '../../../data/projects';
import { SiJavascript, SiTypescript } from 'react-icons/si';

/**
 * ? Cards include: tech stack Array, name, description, overall own rating
 * ! check the render methods of cards. Should come from a local array in ./data folder
 * * Props: array of projects
 */

export const ProjectCards: React.FC<ProjectCardsProps> = ({ width }) => {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {projectData.map((i, index) => {
        return (
          <motion.div variants={item} key={index}>
            <MBox borderLeft={`4px solid ${i.color}`} shadow="lg" my={5} rounded="md" py={1}>
              <Flex p={5} direction="column">
                <Stack direction={['column', 'row', 'row', 'row']} align="center">
                  <IconButton
                    aria-label="language"
                    icon={index !== 2 ? <SiJavascript /> : <SiTypescript />}
                    color={i.languageColor}
                    fontSize={32}
                  />
                  <Stack mb="3" direction={['column', 'row', 'row', 'row']}>
                    <Box as="a" fontSize="xl" onClick={() => window.open(i.url)}>
                      {i.name}
                    </Box>
                    {i.tech.map((itm, idx) => (
                      <Tag key={idx} bg={i.color} p={3.7} rounded="md">
                        <Heading size="sm" color="white">
                          {itm}
                        </Heading>
                      </Tag>
                    ))}
                  </Stack>
                </Stack>
                <Heading size="sm">{i.description}</Heading>
              </Flex>
            </MBox>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
