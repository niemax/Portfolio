import React from "react";
import {
  Box,
  HStack,
  VStack,
  useColorModeValue,
  Heading,
  SimpleGrid,
  Tag,
  TagLabel,
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";

interface TabsProps {}

export const Tabs: React.FC<TabsProps> = ({ data }) => {
  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="whatsapp">
      <TabList>
        <Tab>Web Development</Tab>
        <Tab>DevOps</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <SimpleGrid columns={[1, 2, 2, 2]} spacingX={6} spacingY={4}></SimpleGrid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
