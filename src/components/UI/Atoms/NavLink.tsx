import React from "react";
import {
  Button,
  useColorModeValue,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { INavLinkProps } from "../../../interfaces";
import { FaChevronDown } from "react-icons/fa";
import { colors } from "../../../theme/foundations/colors";

export const NavLink = ({ ...props }: INavLinkProps) => {
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
      {allNavlinksJson.edges?.map(({ node }, index) => {
        return index !== 3 ? (
          <Button
            key={node.name}
            py={props.padding}
            fontSize={props.fontSize}
            w="auto"
            mx={1}
            variant="ghost"
            _hover={{ bg: useColorModeValue("navLightHover", "boxes") }}
            {...props}
          >
            <Link
              activeStyle={{
                color: colors.green,
                fontWeight: 600,
              }}
              to={node.path}
            >
              {node.name}
            </Link>
          </Button>
        ) : (
          <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
              More
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link
                  activeStyle={{
                    color: colors.green,
                    fontWeight: 600,
                  }}
                  to={node.path}
                >
                  {node.name}
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        );
      })}
    </Box>
  );
};
