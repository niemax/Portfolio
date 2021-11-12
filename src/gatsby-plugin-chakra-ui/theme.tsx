import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { colors } from '../theme/foundations/colors';

export const Heading = {
  baseStyle: {
    fontWeight: 'bold',
  },
  sizes: {
    xl: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    md: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.039rem',
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
        color: mode('black', 'white')(props),
        bg: mode('#F7F7F7', '#151B23')(props),
        fontSize: '1.2em',
        height: '100vh',
        margin: 0,
      },
      a: {
        cursor: 'pointer',
        color: mode('black', 'white')(props),
        transition: 'color 0.15s',
        transitionTimingFunction: 'ease-out',
        fontWeight: '500',
        _hover: {
          color: mode('black', 'white')(props),
        },
      },
    }),
  },
};

export default extendTheme({ ...theme, colors, components: { Heading } });
