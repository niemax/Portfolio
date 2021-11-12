import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

interface LineBreakProps {
  width: string | number;
  marginTop?: number;
}

export const LineBreak: React.FC<LineBreakProps> = ({ width, marginTop, ...props }) => {
  return (
    <Box
      w={width}
      h="0.02rem"
      mt={marginTop}
      bg={useColorModeValue('navLightHover', 'gray')}
      mb="8"
      {...props}
    />
  );
};
