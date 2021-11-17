import React from 'react';
import { Button, useColorModeValue, Box } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { NavLinkProps } from '../../../interfaces';

const navLinks = [
  {
    name: 'About',
    path: '/about',
    ariaLabel: 'about',
  },
  {
    name: 'Projects',
    path: '/projects',
    ariaLabel: 'projects',
  },
  {
    name: 'Skills',
    path: '/skills',
    ariaLabel: 'skills',
  },
];

export const NavLink: React.FC<NavLinkProps> = ({ ...props }) => {
  return (
    <Box ml="2">
      {navLinks.map((item, index) => (
        <Button
          py={props.padding}
          fontSize={props.fontSize}
          w="auto"
          as="a"
          mx={1}
          variant="ghost"
          _hover={{ bg: useColorModeValue('navLightHover', 'navDarkHover') }}
          key={index}
          {...props}
        >
          <Link to={item.path}>{item.name}</Link>
        </Button>
      ))}
    </Box>
  );
};
