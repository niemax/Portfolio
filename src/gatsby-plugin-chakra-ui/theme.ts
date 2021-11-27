import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "../theme/foundations/colors";

export const Heading = {
  sizes: {
    xl: {
      fontSize: "1.9rem",
      fontWeight: 500,
      textDecoration: "underline",
      textUnderlineOffset: 8,
      textDecorationColor: "grey",
      textDecorationThickness: "3px",
      marginBottom: 2,
    },
    md: {
      fontSize: "1.3rem",
      fontWeight: 300,
    },
    sm: {
      fontSize: "1rem",
      fontWeight: 450,
      color: "grey",
    },
    xs: {
      fontSize: "0.910rem",
      fontWeight: 450,
      color: "grey",
    },
  },
};

const theme = {
  fonts: {
    body: "M PLUS Rounded 1c",
    heading: "M PLUS Rounded 1c",
  },
  styles: {
    global: props => ({
      body: {
        color: mode("534436", "#ffff")(props),
        bg: mode("#F9F8EB", "#131B1F")(props),
        overflowX: "hidden",
      },
      a: {
        cursor: "pointer",
        color: mode("#3D3D3D", "#EAEAEA")(props),
        transition: "color 0.15s",
        transitionTimingFunction: "ease-out",
        fontWeight: 500,
      },
    }),
  },
  components: {
    Button: {},
  },
};

export default extendTheme({ ...baseTheme, ...theme, colors, components: { Heading } });
