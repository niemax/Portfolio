import React from 'react';
import { Box, Container, Heading, Stack, HStack, Center, Flex, VStack } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

interface MemojiProps {}

export const Memoji: React.FC<MemojiProps> = ({}) => {
  return (
    <VStack bg="green" rounded="full" p={[0, 0, 3, 3]}>
      <StaticImage src="../images/memoji.png" alt="memoji" placeholder="blurred" />
    </VStack>
  );
};
