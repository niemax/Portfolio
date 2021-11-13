import { motion } from 'framer-motion';
import React from 'react';
import { Heading, useColorModeValue, Box } from '@chakra-ui/react';
import { MBox } from '../../motion/MotionBox';
import { container, item } from '../../motion/transitions';
import { ProjectCardsProps } from '../../../interfaces';
import { projectData } from '../../../data/projects';

/**
 * ? Cards include: tech stack Array, name, description, overall own rating
 * ! check the render methods of cards. Should come from a local array in ./data folder
 */

export const ProjectCards: React.FC<ProjectCardsProps> = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{ marginTop: 15, padding: 5 }}
    >
      {projectData.map((i, index) => (
        <motion.div variants={item} key={index}>
          {console.log(i)}
          <MBox
            borderLeft={`4px solid ${i.color}`}
            shadow="lg"
            my={5}
            height={100}
            rounded="lg"
            background={useColorModeValue('gray', 'dark')}
          >
            <Box p={5}>
              <Heading fontSize="xl">{i.language}</Heading>
            </Box>
          </MBox>
        </motion.div>
      ))}
    </motion.div>
  );
};
