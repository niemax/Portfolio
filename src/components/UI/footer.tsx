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
    <Flex>
      <HStack justify="space-between">
        <Heading fontWeight="300" fontSize="md">
          @ 2021, niemax dev
        </Heading>
        <Box>
          {socials.map((social, index) => (
            <IconButton
              key={index}
              variant="ghost"
              fontSize={22}
              aria-label="toggle theme mode"
              icon={<FaGithub />}
              _hover={{ bg: useColorModeValue('navLightHover', 'navDarkHover') }}
            />
          ))}
        </Box>
      </HStack>
    </Flex>
  );
};
