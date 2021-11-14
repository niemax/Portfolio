import React from 'react';
import { Box, BoxProps } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import { useColorModeValue } from '@chakra-ui/color-mode';

export const MotionBox = motion<BoxProps>(Box);

type Hover = {
  scale: number;
};

interface MotionBoxProps {
  height: number | string;
  width: number | string;
  animation: Hover;
  borderLeft?: string;
  border?: string;
  shadow?: string;
  my?: number;
  py?: number;
  p?: number;
  rounded?: string;
}

export const MBox: React.FC<MotionBoxProps> = ({ height, width, animation, ...props }) => (
  <MotionBox
    height={height}
    width={width}
    background={useColorModeValue('white', 'dark')}
    whileHover={animation}
    whileTap={{ scale: 0.9 }}
    {...props}
  />
);
