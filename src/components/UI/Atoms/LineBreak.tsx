import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { LineBreakProps } from '../../../interfaces';

export const LineBreak: React.FC<LineBreakProps> = ({ width, marginTop = 3, ...props }) => {
  return (
    <Box
      w={width}
      h="0.07rem"
      mt={marginTop}
      bg={useColorModeValue('navLightHover', 'gray')}
      mb="8"
      {...props}
    />
  );
};
