import { motion } from 'framer-motion';
import React, { Fragment } from 'react';
import { Heading, useColorModeValue, Box } from '@chakra-ui/react';
import { MBox } from '../motion/motions';
import { StaggerChildren } from '../../utility/styles/transitions';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -300 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

interface ProjectCardsProps {
  name: string;
  tech?: string[];
  decsription?: string;
}

/**
 * ? Cards include: tech stack Array, name, description, overall own rating
 * ! check the render methods of cards. Should come from a local array in ./data folder
 */

export const ProjectCards: React.FC<ProjectCardsProps> = ({ name = 'Test', tech, decsription }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{ marginTop: 15, padding: 5 }}
    >
      {[1, 2, 3].map((_, i) => (
        <motion.div variants={item} key={i}>
          <MBox
            borderLeft="4px solid #00A375"
            shadow="lg"
            my={5}
            height={100}
            rounded="lg"
            background={useColorModeValue('gray', 'dark')}
          >
            <Box p={5}>
              <Heading fontSize="xl">{name}</Heading>
            </Box>
          </MBox>
        </motion.div>
      ))}
    </motion.div>
  );
};
