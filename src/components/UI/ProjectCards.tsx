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
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
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

export const ProjectCards: React.FC<ProjectCardsProps> = ({ name = 'Test', tech, decsription }) => {
  return (
    <motion.div variants={container} initial="hidden" animate="show" style={{ width: '100%' }}>
      {[1, 2, 3].map((_, i) => (
        <motion.div variants={item} key={i}>
          <MBox
            border="0.5px solid gray"
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
