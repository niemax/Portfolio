import React from 'react';
import { PageScaleFade } from '../utility/styles/transitions';
import { Heading, Flex } from '@chakra-ui/react';
import Seo from '../components/seo';
import { ProjectCards } from '../components/UI/ProjectCards';

const Projects = () => {
  return (
    <Flex>
      <PageScaleFade>
        <Seo title="Projects" />
        <Flex flexDir="column" px={[10, 14, 14, 14]}>
          <Heading color="green">My Work</Heading>
          <Heading size="md" mt="4">
            Personal projects that I've written in the past year. Mainly Mobile-focused
          </Heading>
          <ProjectCards name="test" />
        </Flex>
      </PageScaleFade>
    </Flex>
  );
};

export default Projects;
