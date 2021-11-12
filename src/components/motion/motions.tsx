import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@chakra-ui/layout';
import { motion, AnimatePresence } from 'framer-motion';

export const MotionBox = motion<BoxProps>(Box);

export const MBox = ({ ...props }) => {
  return (
    <AnimatePresence>
      <MotionBox
        height={props.height}
        width={props.width}
        background={props.background}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.9 }}
        {...props}
      />
    </AnimatePresence>
  );
};
