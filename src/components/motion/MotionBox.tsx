import React from 'react';
import { Box, BoxProps } from '@chakra-ui/layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useColorModeValue } from '@chakra-ui/color-mode';

export const MotionBox = motion<BoxProps>(Box);

export const MBox = ({ ...props }) => {
  return (
    <MotionBox
      height={props.height}
      width={props.width}
      background={useColorModeValue('white', 'dark')}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    />
  );
};
