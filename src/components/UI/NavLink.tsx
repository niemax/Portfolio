import React from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'gatsby';

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

interface NavLinkProps {
  fontSize?: string;
}

export const NavLink: React.FC<NavLinkProps> = props => {
  return (
    <>
      {navLinks.map((item, index) => (
        <Button
          fontSize={props.fontSize}
          as="a"
          variant="ghost"
          _hover={{ bg: useColorModeValue('navLightHover', 'navDarkHover') }}
          key={index}
        >
          <Link to={item.path}>{item.name}</Link>
        </Button>
      ))}
    </>
  );
};
