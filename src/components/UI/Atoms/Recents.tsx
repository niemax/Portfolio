import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { LineBreak } from './LineBreak';
import { ProjectCards } from './ProjectCards';

interface RecentsProps {}

export const Recents: React.FC<RecentsProps> = ({}) => {
  return (
    <>
      <Heading mt="20">Recent work</Heading>
      <Box>
        <LineBreak width="12rem" />
        <ProjectCards />
      </Box>
    </>
  );
};
