import { Link } from 'gatsby';
import React from 'react';
import { Box, Container, Heading, Stack, HStack, Center, Flex, VStack } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Emoji } from '../components/Emoji';

const IndexPage = () => {
  return (
    <Stack mt="20" direction={['column', 'column', 'row']}>
      <Center w={[100, 200, 1000]} mr="5">
        <Box bg="green" rounded="full" p={1}>
          <StaticImage src="../images/memoji.png" alt="memoji " placeholder="blurred" />
        </Box>
      </Center>
      <VStack align="self-start">
        <Heading fontSize="3xl" color="green">
          Greetings!
        </Heading>
        <Heading fontSize="xl" fontWeight="400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </Heading>
        <Box mt="5">
          <Heading fontSize="2xl" fontWeight="500">
            See my work{' '}
            <Link to="/projects">
              <Box as="a" color="green" fontWeight={800}>
                here
              </Box>
            </Link>
          </Heading>
        </Box>
      </VStack>
    </Stack>
  );
};

export default IndexPage;
