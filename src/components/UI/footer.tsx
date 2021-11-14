import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Socials } from './Atoms/Socials';

interface footerProps {}

export const Footer: React.FC<footerProps> = ({}) => {
  return (
    <Box px={14} pb={10}>
      <Stack direction={['column', 'column', 'row', 'row']} align="center" justify="space-between">
        <Heading fontSize="md" color={useColorModeValue('#595959', 'white')}>
          &copy; 2021 Axel Nieminen
        </Heading>
        <Socials />
      </Stack>
    </Box>
  );
};
