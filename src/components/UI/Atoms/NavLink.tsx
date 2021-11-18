import React from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { NavLinkProps } from '../../../interfaces';

export const NavLink = ({ ...props }: NavLinkProps) => {
  const { allNavlinksJson } = useStaticQuery<AllNavlinksJson>(
    graphql`
      query {
        allNavlinksJson {
          edges {
            node {
              ariaLabel
              name
              path
            }
          }
        }
      }
    `
  );

  type AllNavlinksJson = {
    allNavlinksJson: {
      edges: {
        node: {
          ariaLabel: string;
          name: string;
          path: string;
        };
      }[];
    };
  };

  return (
    <>
      {allNavlinksJson?.edges?.map(({ node }) => (
        <Button
          key={node.name}
          py={props.padding}
          fontSize={props.fontSize}
          w="auto"
          as="a"
          mx={1}
          variant="ghost"
          _hover={{ bg: useColorModeValue('navLightHover', 'navDarkHover') }}
          {...props}
        >
          <Link to={node.path}>{node.name}</Link>
        </Button>
      ))}
    </>
  );
};
