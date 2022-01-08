import * as React from "react";
import { Flex, HStack } from "@chakra-ui/react";
import Seo from "../components/seo";
import { Memoji } from "../components/UI/Atoms/Memoji";
import { PageScaleFade } from "../components/motion/transitions";
import { Introduction } from "../components/UI/Atoms/Introduction";
import { Recents } from "../components/UI/Atoms/Recents";
import { Features } from "../components/UI/Atoms/Features";

const IndexPage = () => (
  <Flex direction="column" align="center" px={[2, 14, 14, 14]}>
    <PageScaleFade>
      <Seo title="Home" />
      <Flex direction={["column", "column", "row"]}>
        <Flex direction="column" align="self-start">
          <HStack align="center" justify="center" mx="auto">
            <Memoji width={150} height={150} padding={3} />
          </HStack>
          <section>
            <Introduction />
            <Features />
            <Recents />
          </section>
        </Flex>
      </Flex>
    </PageScaleFade>
  </Flex>
);

export default IndexPage;
