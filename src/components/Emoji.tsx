import React from 'react';
import { Box, Container, Heading, HStack, Center, Flex, VStack } from '@chakra-ui/react';

interface EmojiProps {
  symbol: string;
}

export const Emoji: React.FC<EmojiProps> = ({ symbol }) => {
  return <Box as="span">{symbol}</Box>;
};
