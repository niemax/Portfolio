import React, { useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { MBox } from './MotionBox';
import { ScaleFade } from '@chakra-ui/react';

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  hidden: { opacity: 0, x: -300 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const PageScaleFade = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const timeout = setTimeout(() => {
      onToggle(true);
    }, 400);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return <ScaleFade in={isOpen}>{children}</ScaleFade>;
};
