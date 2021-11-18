import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { LineBreakProps } from "../../../interfaces";

export const LineBreak: React.FC<LineBreakProps> = ({ width, marginTop = 3, mb = 8, ...props }) => {
  return (
    <Box
      w={width}
      h="0.02rem"
      mt={marginTop}
      bg={useColorModeValue("navLightHover", "rgba(206, 206, 206, 0.12)")}
      mb={mb}
      {...props}
    />
  );
};
