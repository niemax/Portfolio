import React from 'react';
import { Box, Container, Heading, Stack, HStack, Center, Flex, VStack } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

interface MemojiProps {
  height?: number | string;
  width?: number | string;
  ml?: number;
  padding?: number;
}

export const Memoji: React.FC<MemojiProps> = ({ ...props }) => {
  return (
    <Center
      bg="green"
      rounded="full"
      h={props.height}
      w={props.width}
      ml={props.ml}
      p={props.padding}
    >
      <StaticImage src="../images/memoji.png" alt="memoji" placeholder="blurred" />
    </Center>
  );
};
