import React, { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const MotionBox = motion<BoxProps>(Box);

type Hover = {
  scale: number;
};

interface MBoxProps {
  height: number | string;
  width: number | string;
  animation?: Hover;
  borderLeft?: string;
  border?: string;
  shadow?: string;
  my?: number;
  py?: number;
  p?: number;
  rounded?: string;
  children: ReactNode;
}

export const MBox = ({ height, width, animation, children, ...props }: MBoxProps) => (
  <MotionBox
    height={height}
    width={width}
    background={useColorModeValue("white", "dark")}
    whileHover={animation}
    whileTap={{ scale: 0.9 }}
    {...props}
  >
    {children}
  </MotionBox>
);
