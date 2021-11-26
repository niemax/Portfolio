import { Box, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Socials } from "./Atoms/Socials";

export const Footer = () => (
  <Box px={14} pb={10} mt={10}>
    <Stack direction={["column", "column", "row", "row"]} align="center" justify="space-between">
      <Heading size="sm" color={useColorModeValue("#595959", "white")}>
        &copy; {new Date().getFullYear()} Axel Nieminen
      </Heading>
      <Socials />
    </Stack>
  </Box>
);
