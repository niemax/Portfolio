import React, { useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { ScaleFade } from '@chakra-ui/react';

export const skillsContainer = {
  hidden: { opacity: 0, transition: { when: 'afterChildren' } },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -5,
    },
  },
};

export const skillsItem = {
  hidden: { opacity: 0, x: -100, y: -200 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};
export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

interface ScaleFadeProps {}

export const PageScaleFade: React.FC<ScaleFadeProps> = ({ children }) => {
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
