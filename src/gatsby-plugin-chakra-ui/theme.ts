import { extendTheme, theme as baseTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { colors } from '../theme/foundations/colors';

export const Heading = {
  sizes: {
    xl: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    md: {
      fontSize: '1.3rem',
      fontWeight: 500,
    },
    sm: {
      fontSize: '1rem',
      fontWeight: 450,
    },
  },
};

const theme = {
  fonts: {
    heading: 'poppins',
    body: 'poppins',
  },
  styles: {
    global: props => ({
      body: {
        color: mode('#3D3D3D', '#EAEAEA')(props),
        bg: mode('#F7F7F7', '#151B23')(props),
        height: '100vh',
        margin: 0,
      },
      a: {
        cursor: 'pointer',
        color: mode('#3D3D3D', '#EAEAEA')(props),
        transition: 'color 0.15s',
        transitionTimingFunction: 'ease-out',
        fontWeight: 500,
        _hover: {
          color: mode('black', 'white')(props),
          fontWeight: 800,
        },
      },
    }),
  },
};

export default extendTheme({ ...baseTheme, ...theme, colors, components: { Heading } });
