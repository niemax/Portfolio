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
    name: 'Tech Stack',
    path: '/tech-stack',
    ariaLabel: 'tech-stack',
  },
];

export const NavLink: React.FC<NavLinkProps> = ({ ...props }) => {
  return (
    <Box px={[5, 10, 10, 20]}>
      {navLinks.map((item, index) => (
        <Button
          py={props.padding}
          m={0}
          fontSize={props.fontSize}
          as="a"
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
