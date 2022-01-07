import React from "react";
import { PageScaleFade } from "../components/motion/transitions";
import { Box, HStack, Heading, Tabs as ChakraTabs, TabList, Tab, Wrap } from "@chakra-ui/react";
import { graphql } from "gatsby";
import { FaChartPie, FaLanguage, FaListUl } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import Seo from "../components/seo";
import { SkillsCards } from "../components/UI/Atoms/SkillsCards";

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
        <Box mt={5}>
          <ChakraTabs isLazy={true} variant="soft-rounded" colorScheme={colorScheme}>
            <TabList>
              <Wrap>
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
                  Web/Mobile Development <GiSpiderWeb />
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
              </Wrap>
            </TabList>
          </ChakraTabs>
        </Box>
        <SkillsCards skillsData={skillsData} />
      </Box>
    </PageScaleFade>
  );
};

export const _query = graphql`
  query {
    allTechStackJson {
      edges {
        node {
          description
          link
          name
          type
          hearts
          colorScheme
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
