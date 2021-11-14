import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  HStack,
  useColorMode,
  useColorModeValue,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

interface SkillsCardsProps {}

export const SkillsCards: React.FC<SkillsCardsProps> = ({}) => {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
  );
};
