import React from "react";
import { PageScaleFade } from "../components/motion/transitions";
import { motion } from "framer-motion";
import { skillsContainer, skillsItem } from "../components/motion/transitions";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  Box,
  HStack,
  useColorModeValue,
  Heading,
  SimpleGrid,
  Tabs as ChakraTabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import { MBox } from "../components/motion/MotionBox";
import { graphql } from "gatsby";
import { FaChartPie, FaLanguage, FaListUl } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { GiSpiderWeb } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import Seo from "../components/seo";

const Skills = ({ data }: any) => {
  const skills = data.allTechStackJson.edges;
  const [skillsData, setSkillsData] = React.useState<[]>(skills);
  const [colorScheme, setColorScheme] = React.useState<string>("whatsapp");

  const filterData = (keyword: string) => {
    const filteredData: any = skills?.filter(({ node }: any) => node.type === keyword);
    setSkillsData(filteredData);
  };

  return (
    <PageScaleFade>
      <Seo title="Skills" />
      <Box mt="3" w={[null, null, "70%"]} mx="auto" px={[4, 6, 0, 0]}>
        <Box align="center" justify="center">
          <HStack align="center" justify="center">
            <Heading>Tech Stack</Heading>
            <FaChartPie fontSize={28} />
          </HStack>
          <Heading size="md" mt={4}>
            Languages, technologies, and tools I'm familiar with (lightnings describe my efficiency
            with the tool).
          </Heading>
        </Box>
        <Box mt={4}>
          <ChakraTabs isLazy={true} variant="soft-rounded" colorScheme={colorScheme}>
            <TabList>
              <Tab
                onClick={() => {
                  setColorScheme("whatsapp");
                  setSkillsData(skills);
                }}
              >
                All <FaListUl style={{ marginLeft: 6 }} fontSize={16} />
              </Tab>
              <Tab
                onClick={() => {
                  setColorScheme("teal");
                  filterData("language");
                }}
              >
                Language <FaLanguage style={{ marginLeft: 2 }} fontSize={24} />
              </Tab>
              <Tab
                onClick={() => {
                  setColorScheme("yellow");
                  filterData("development");
                }}
              >
                Web Development <GiSpiderWeb />
              </Tab>
              <Tab
                onClick={() => {
                  setColorScheme("purple");
                  filterData("design");
                }}
              >
                Design <MdOutlineDesignServices />{" "}
              </Tab>
              <Tab
                onClick={() => {
                  setColorScheme("orange");
                  filterData("tools");
                }}
              >
                Tools <VscTools />
              </Tab>
            </TabList>
          </ChakraTabs>
        </Box>
        <Box mt="8">
          <motion.div variants={skillsContainer} initial="hidden" animate="show">
            <SimpleGrid columns={[1, 2, 2, 2]} spacingX={6} spacingY={4}>
              {skillsData.map(({ node }: any) => {
                const image = getImage(node.image.childImageSharp);
                return (
                  <motion.div variants={skillsItem} key={node.name}>
                    <MBox
                      width="auto"
                      height={20}
                      px={2}
                      py={2}
                      animation={{ y: -6.25 }}
                      border={useColorModeValue("1px solid #E2E2E2", `1px solid #2A404B`)}
                    >
                      <HStack>
                        <Box
                          bg={useColorModeValue("navLightHover", "navDarkHover")}
                          rounded="lg"
                          p={1}
                        >
                          <GatsbyImage alt={node.name} image={image} height={50} width={50} />
                        </Box>
                        <Box
                          as="a"
                          onClick={() => window.open(`${node.link}`)}
                          _hover={{ color: node.color }}
                        >
                          <HStack>
                            <Heading size="md" fontSize={18} fontWeight={500} mt={2}>
                              {node.name}
                            </Heading>
                            {Array.from(Array(node.hearts)).map((_, idx) => (
                              <HiOutlineLightningBolt key={idx} />
                            ))}
                          </HStack>
                          <Heading size="xs" mt={1}>
                            {node.description}
                          </Heading>
                        </Box>
                      </HStack>
                    </MBox>
                  </motion.div>
                );
              })}
            </SimpleGrid>
          </motion.div>
        </Box>
      </Box>
    </PageScaleFade>
  );
};

export const _query = graphql`
  query {
    allTechStackJson {
      edges {
        node {
          color
          description
          link
          name
          type
          hearts
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                quality: 50
                height: 30
                width: 30
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`;

export default Skills;
