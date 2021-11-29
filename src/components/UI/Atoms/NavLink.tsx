import React from "react";
import { Button, useColorModeValue, Box } from "@chakra-ui/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { INavLinkProps } from "../../../interfaces";

export const NavLink = ({ ...props }: INavLinkProps) => {
  const [isActive, setIsActive] = React.useState<boolean | number>(false);
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
    <Box ml={1}>
      {allNavlinksJson.edges?.map(({ node }, index) => (
        <Button
          key={node.name}
          py={props.padding}
          fontSize={props.fontSize}
          w="auto"
          mx={1}
          variant="ghost"
          onClick={() => setIsActive(index)}
          _hover={{ bg: useColorModeValue("navLightHover", "boxes") }}
          {...props}
        >
          <Link
            activeStyle={{
              color: "#76B39D",
              fontWeight: 600,
            }}
            to={node.path}
          >
            {node.name}
          </Link>
        </Button>
      ))}
    </Box>
  );
};
