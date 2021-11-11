import { Flex, Box, Heading, Center, useColorModeValue, HStack } from '@chakra-ui/react';
import React from 'react';

interface footerProps {}

export const Footer: React.FC<footerProps> = ({}) => {
  return (
    <Flex position="absolute" bottom="10">
      <Box maxW={800} justify="space-between">
        <HStack justify="space-between" spacing={20}>
          <Heading fontWeight="300" fontSize="lg">
            Hello from footer!
          </Heading>
        </HStack>
      </Box>
    </Flex>
  );
};
