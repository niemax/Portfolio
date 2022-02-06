import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { colors } from "../../../theme/foundations/colors";
import { StaticImage } from "gatsby-plugin-image";

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
        <Box as="span" fontWeight="800" color={colors.darkerGreen}>
          Axel,{" "}
        </Box>
        Software Developer and student from Helsinki. My vision is to make the web accessible and
        enjoyable for everyone. Love working in the <strong>JavaScript</strong> ecosystem -
        especially{" "}
        <StaticImage
          alt="React"
          src="../../../images/icons8-react-480.png"
          width={30}
          height={30}
        />{" "}
        & ️
        <StaticImage
          alt="React"
          src="../../../images/icons8-nodejs-144.png"
          width={40}
          height={40}
        />{" "}
        🌤
      </Text>
      <Box mt={4}>
        <Text fontSize="2xl">
          Love working in an environment in which all the people share the same passion 😊☄️
        </Text>
      </Box>
    </Box>
  </>
);
