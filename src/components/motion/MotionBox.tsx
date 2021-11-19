import React, { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const MotionBox = motion<BoxProps>(Box);

type Scale = {
  scale: number;
};

type Y = {
  y: number;
};

interface MBoxProps {
  height: number | string;
  width: number | string;
  animation?: Scale | Y;
  borderLeft?: string;
  border?: string;
  shadow?: string;
  my?: number;
  py?: number;
  px?: number;
  rounded?: string;
  children: ReactNode;
}

export const MBox = ({ height, width, animation, children, ...props }: MBoxProps) => (
  <MotionBox
    height={height}
    width={width}
    background={useColorModeValue("gray", "boxes")}
    whileHover={animation}
    whileTap={{ scale: 0.9 }}
    {...props}
  >
    {children}
  </MotionBox>
);
