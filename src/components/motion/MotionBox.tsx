import React, { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Y, Scale } from "../../types";
export const MotionBox = motion<BoxProps>(Box);

interface IMBoxProps {
  height: number | string;
  width?: number | string;
  animation?: Scale | Y;
  border?: string;
  shadow?: string;
  my?: number;
  py?: number;
  px?: number;
  children: ReactNode;
  maxW?: number;
}

export const MBox = ({ height, width, animation, children, ...props }: IMBoxProps) => (
  <MotionBox
    height={height}
    width={width}
    rounded="lg"
    bg={useColorModeValue("light", "boxes")}
    whileHover={animation}
    whileTap={{ scale: 0.9 }}
    {...props}
  >
    {children}
  </MotionBox>
);
