import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "../theme/foundations/colors";

export const Heading = {
  sizes: {
    xl: {
      fontSize: "1.8rem",
      fontWeight: 500,
    },
    md: {
      fontSize: "1.3rem",
      fontWeight: 400,
    },
    sm: {
      fontSize: "1rem",
      fontWeight: 450,
      color: "grey",
    },
  },
};

const theme = {
  fonts: {
    body: "poppins",
    heading: "poppins",
  },
  styles: {
    global: props => ({
      body: {
        color: mode("#000", "#ffff")(props),
        bg: mode("#F7F7F7", "#1C222A")(props),
        margin: 0,
      },
      a: {
        cursor: "pointer",
        color: mode("#3D3D3D", "#EAEAEA")(props),
        transition: "color 0.15s",
        transitionTimingFunction: "ease-out",
        fontWeight: 500,
        _hover: {
          color: mode("black", "white")(props),
          fontWeight: 800,
        },
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {},
    },
  },
};

export default extendTheme({ ...baseTheme, ...theme, colors, components: { Heading } });
