import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
  FaBriefcase,
  FaTools,
  FaMobileAlt,
  FaCode,
  FaGraduationCap,
  FaPython,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import Timeline from "./Timeline";
import { Link } from "gatsby";

const StoryItem: React.FC = () => {
  return (
    <Flex align="baseline" direction="column" mb={0} px={[2, 10, 10, 10]}>
      <Box mb={10}>
        <Heading>My Developer story</Heading>
      </Box>
      {/* 2022 */}
      <Box mb={8}>
        <Text fontSize="x-large" fontWeight={600}>
          2022
        </Text>
      </Box>
      <Timeline icon={FaBriefcase} skipTrail={true}>
        <Text fontSize="large">
          Landed a job as a <strong>Software Engineer</strong> at{" "}
          <a href="https://qvik.com/">
            {" "}
            <strong>Qvik</strong>
          </a>{" "}
          ❤️
        </Text>
      </Timeline>
      <Timeline icon={FaMobileAlt} skipTrail={true}>
        <Text fontSize="large">
          Published{" "}
          <Link to="/projects/habitio-details">
            <strong>Habitio</strong>
          </Link>{" "}
          to App Store ️
        </Text>
      </Timeline>
      {/* 2021 */}
      <Box mb={8} mt={8}>
        <Text fontSize="x-large" fontWeight={600}>
          2021
        </Text>
      </Box>
      <Timeline icon={FaTools}>
        <Text fontSize="large">
          Built my personal Portfolio with <strong>TypeScript</strong> & <strong>GatsbyJs</strong>
        </Text>
      </Timeline>
      <Timeline icon={FaGraduationCap}>
        <Text fontSize="large">Finished one year worth of ICT studies</Text>
      </Timeline>
      <Timeline icon={FaMobileAlt} skipTrail={true}>
        <Text fontSize="large">
          Finished{" "}
          <Link to="/projects/gotrain-mobile-details">
            <strong>GoTrain</strong>
          </Link>{" "}
          as my first ever mobile project for school
        </Text>
      </Timeline>
      {/* 2020 */}
      <Box mb={8} mt={8}>
        <Text fontSize="x-large" fontWeight={600}>
          2020
        </Text>
      </Box>
      <Timeline icon={FaGraduationCap} skipTrail={true}>
        <Text fontSize="large">
          Started ICT studies in <strong>Haaga-Helia UAS</strong>
        </Text>
      </Timeline>
      {/* 2019 */}
      <Box mb={8} mt={8}>
        <Text fontSize="x-large" fontWeight={600}>
          2019
        </Text>
      </Box>
      <Timeline icon={FaHtml5}>
        <Text fontSize="large">
          Followed a tutorial and built a food recipe static website with <strong>HTML</strong> &{" "}
          <strong>CSS</strong>
        </Text>
      </Timeline>
      <Timeline icon={FaJs}>
        <Text fontSize="large">
          Followed a tutorial and built a budget tracking app using vanilla{" "}
          <strong>JavaScript</strong>
        </Text>
      </Timeline>
      <Timeline icon={FaHtml5}>
        <Text fontSize="large">
          Started learning <strong>HTML</strong>, <strong>CSS</strong> & <strong>JavaScript</strong>
        </Text>
      </Timeline>
      <Timeline icon={FaPython}>
        <Text fontSize="large">
          Wrote small <code>scripts</code> with <strong>Python</strong>
        </Text>
      </Timeline>
      <Timeline icon={FaPython} skipTrail={true}>
        <Text fontSize="large">
          Started learning <strong>Python</strong>
        </Text>
      </Timeline>
    </Flex>
  );
};

export default StoryItem;