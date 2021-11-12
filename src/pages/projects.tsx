import React from 'react';
import { PageScaleFade } from '../utility/styles/transitions';
import { Heading, useColorModeValue, Flex, VStack } from '@chakra-ui/react';
import Seo from '../components/seo';
import { motion } from 'framer-motion';
import { ProjectCards } from '../components/UI/ProjectCards';

const Projects = () => {
  return (
    <PageScaleFade>
      <Flex h="100vh" py={20}>
        <Seo title="Projects" />
        <VStack spacing={10} align="flex-start" px={12} w="full">
          <Heading color="green">My Work</Heading>
          <Heading size="md" fontWeight="400">
            Personal projects that I've written in the past year
          </Heading>
          <ProjectCards name="test" />
        </VStack>
      </Flex>
    </PageScaleFade>
  );
};

export default Projects;
