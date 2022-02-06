import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "../theme/foundations/colors";

export const Heading = {
  sizes: {
    xl: {
      fontSize: "1.9rem",
      fontWeight: 700,
      textDecoration: "underline",
      textUnderlineOffset: 13,
      textDecorationColor: "gray.600",
      textDecorationThickness: "2px",
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
  config: {
    useSystemColorMode: true,
  },
  fonts: {
    body: "M PLUS Rounded 1c",
    heading: "M PLUS Rounded 1c",
  },
  styles: {
    global: props => ({
      body: {
        color: mode("#000", "#ffff")(props),
        bg: mode("#F7FAFC", "#171923")(props),
        overflowX: "hidden",
        overflowY: "auto",
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
};

const customTheme = extendTheme({
  ...baseTheme,
  ...theme,
  colors,
  components: { Heading },
});

export default customTheme;
