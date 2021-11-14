import React from 'react';
import { motion } from 'framer-motion';
import {
  Heading,
  Tooltip,
  Flex,
  Stack,
  Tag,
  IconButton,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { MBox } from '../../motion/MotionBox';
import { container, item } from '../../motion/transitions';
import { projectData } from '../../../data/projects';
import { SiJavascript, SiTypescript } from 'react-icons/si';

/**
 * ? Cards include: tech stack Array, name, description, overall own rating
 * ! check the render methods of cards. Should come from a local array in ./data folder
 * * Props: array of projects
 */

export const ProjectCards: React.FC = () => {
  const animation = { scale: 1.04 };
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {projectData.map((i, index) => {
        return (
          <motion.div variants={item} key={index}>
            <MBox
              height="auto"
              width="auto"
              borderLeft={`4px solid ${i.color}`}
              shadow="md"
              my={5}
              rounded="md"
              py={1}
              animation={animation}
            >
              <Flex p={5} direction="column">
                <Stack direction={['column', 'row', 'row', 'row']} align="center">
                  <IconButton
                    aria-label="language"
                    icon={index !== 2 ? <SiJavascript /> : <SiTypescript />}
                    color={i.languageColor}
                    fontSize={32}
                  />
                  <Stack mb="3" direction={['column', 'row', 'row', 'row']}>
                    <Tooltip
                      placement="auto"
                      bg={useColorModeValue('black', 'white')}
                      color={useColorModeValue('white', 'black')}
                      aria-label="A tooltip"
                      label="Github Link"
                    >
                      <Box as="a" fontSize="xl" onClick={() => window.open(i.url)}>
                        {i.name}
                      </Box>
                    </Tooltip>
                    {i.tech.map((itm, idx) => (
                      <Tag key={idx} bg={i.color} p={3.7} rounded="md">
                        <Heading size="sm" color="white">
                          {itm}
                        </Heading>
                      </Tag>
                    ))}
                  </Stack>
                </Stack>
                <Heading size="sm" mt="2">
                  {i.description}
                </Heading>
              </Flex>
            </MBox>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
