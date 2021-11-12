import React, { useEffect } from 'react';
import { SlideFade, useDisclosure } from '@chakra-ui/react';
import { MBox } from '../../components/motion/motions';
import { Fade, ScaleFade, Slide } from '@chakra-ui/react';

const staggerVariants = {
  initial: {
    opacity: 0,
    translateY: -20,
  },
  enter: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants = {
  initial: {
    opacity: 0,
    translateY: -20,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
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

export const StaggerChildren = ({ children }) => {
  return (
    <MBox
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      variants={staggerVariants}
    >
      {children}
    </MBox>
  );
};

export const CardTransition = ({ children }) => {
  return (
    <MBox width={100} height={100} background="black" variants={variants}>
      {children}
    </MBox>
  );
};
