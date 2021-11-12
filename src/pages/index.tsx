import { Link } from 'gatsby';
import React from 'react';
import { Box, Container, Heading, Stack, HStack, Center, Flex, VStack } from '@chakra-ui/react';
import Seo from '../components/seo';
import { Memoji } from '../components/UI/Memoji';
import { PageScaleFade } from '../utility/styles/transitions';

const IndexPage = () => {
  return (
    <PageScaleFade>
      <Flex
        h="100vh"
        py={20}
        align="flex-start"
        justifyContent={['center', 'center', 'flex-start']}
      >
        <Seo title="Home" />
        <Stack direction={['column', 'column', 'row']} spacing={10} align="center" px={12}>
          <Memoji />
          <VStack align="self-start">
            <Heading color="green" mb="5">
              Hello{' '}
              <Box className="wave" as="span">
                👋
              </Box>
            </Heading>
            <Heading fontSize="xl" fontWeight="400">
              I'm{' '}
              <Box as="span" fontWeight="800" color="green">
                Axel,{' '}
              </Box>
              Software developer from Helsinki, Finland. My vision is making the web accessible and
              smooth for everyone included. I love especially working with React and NodeJS.
            </Heading>

            <Heading fontSize="2xl" fontWeight="500" mt="4">
              See my work{' '}
              <Link to="/projects">
                <Box as="a" color="green" fontWeight={800}>
                  here
                </Box>
              </Link>
            </Heading>
          </VStack>
        </Stack>
      </Flex>
    </PageScaleFade>
  );
};

export default IndexPage;
