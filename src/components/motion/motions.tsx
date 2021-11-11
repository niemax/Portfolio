import React from 'react';
import { Box, BoxProps } from '@chakra-ui/layout';
import { motion } from 'framer-motion';

export const MotionBox = motion<BoxProps>(Box);

export function MBox() {
  return (
    <MotionBox
      height="40px"
      bg="yellow"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
  );
}
