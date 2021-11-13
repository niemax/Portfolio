import React from 'react';
import { PageScaleFade } from '../components/motion/transitions';
import { Heading, Flex, Box } from '@chakra-ui/react';
import Seo from '../components/seo';
import { ProjectCards } from '../components/UI/Atoms/ProjectCards';

const Projects = () => {
  return (
    <Flex>
      <PageScaleFade>
        <Seo title="Projects" />
        <Flex flexDir="column" px={[10, 14, 14, 14]}>
          <Box>
            <Heading color="green">My Work</Heading>
            <Heading size="md" mt="4">
              Personal projects that I've written in the past year. Mainly Mobile-focused
            </Heading>
            <ProjectCards />
          </Box>
        </Flex>
      </PageScaleFade>
    </Flex>
  );
};

export default Projects;
