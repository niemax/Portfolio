import React, { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ScaleFade } from "@chakra-ui/react";

export const skillsContainer = {
  hidden: { opacity: 0, transition: { when: "afterChildren" } },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -5,
    },
  },
};

export const skillsItem = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

export const fromDownToUp = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fromDownToUpItem = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const otherTransition = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const otherItem = {
  hidden: { opacity: 0, x: 250 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
    },
  },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const PageScaleFade: React.FC = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const timeout = setTimeout(() => {
      onToggle(!onToggle);
    }, 300);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <ScaleFade initialScale={0.85} reverse={true} in={isOpen}>
      {children}
    </ScaleFade>
  );
};

export const staggerProjectCardContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const staggerProjectCardItem = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0 },
};

export const staggerTimelineItemContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
