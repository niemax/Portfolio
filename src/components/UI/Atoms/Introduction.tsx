import React from "react";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { colors } from "../../../theme/foundations/colors";

export const Introduction: React.FC = () => (
  <>
    <Heading mt={10} mb={5}>
      Hello
      <Box className="wave" as="span">
        👋
      </Box>
    </Heading>
    <Box>
      <Text fontSize="2xl">
        I'm{" "}
        <Box as="span" fontWeight="800" color={useColorModeValue(colors.darkerGreen, colors.green)}>
          Axel,{" "}
        </Box>
        Software Developer and student from Helsinki. My vision is to make the web accessible and
        enjoyable for everyone. Love working in the <strong>JavaScript</strong> ecosystem -
        especially <strong>React & NodeJS.</strong>
      </Text>
      <Box mt={4}>
        <Text fontSize="2xl">
          Love working in an environment in which all the people share the same passion.
        </Text>
      </Box>
    </Box>
  </>
);
