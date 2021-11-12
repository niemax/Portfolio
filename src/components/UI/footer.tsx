import {
  Flex,
  Stack,
  Box,
  Heading,
  Center,
  useColorModeValue,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { socials } from '../../data/socialLinks';
import { FaGithub, FaDev } from 'react-icons/fa';

interface footerProps {}

export const Footer: React.FC<footerProps> = ({}) => {
  return (
    <Flex h="auto">
      <HStack spacing={10} align="center" justify="space-between" px={12}>
        <Heading fontWeight="300" fontSize="md">
          @ 2021, niemax dev
        </Heading>
      </HStack>
      {/*  {socials.map((social, index) => (
        <IconButton
          key={index}
          color={'#FFD632'}
          variant="ghost"
          fontSize={26}
          aria-label="toggle theme mode"
          icon={}
          _hover={{ bg: useColorModeValue('navLightHover', 'navDarkHover') }}
        />
      ))} */}
    </Flex>
  );
};
