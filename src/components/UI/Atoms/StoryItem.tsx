import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
  FaBriefcase,
  FaTools,
  FaMobileAlt,
  FaGraduationCap,
  FaPython,
  FaHtml5,
  FaJs,
  FaReact,
  FaCheck,
  FaFlagCheckered,
  FaDatabase,
} from "react-icons/fa";
import Timeline from "./Timeline";
import { Link } from "gatsby";

const StoryItem: React.FC = () => {
  return (
    <Flex direction="column" mb={0} px={[2, 10, 10, 12]}>
      <Box mb={10}>
        <Heading>My Developer Story 👨‍💻</Heading>
      </Box>
      {/* 2022 */}
      <Box mb={8}>
        <Text fontSize="x-large" fontWeight={600} color="orange">
          2022
        </Text>
      </Box>
      <Timeline icon={FaBriefcase}>
        <Text fontSize="large">
          Landed a job as a <strong style={{ color: "orange" }}>Software Engineer</strong> at{" "}
          <a href="https://qvik.com/">
            {" "}
            <strong style={{ color: "orange" }}>Qvik</strong>
          </a>{" "}
          ❤️
        </Text>
      </Timeline>
      <Timeline icon={FaMobileAlt}>
        <Text fontSize="large">
          Published{" "}
          <Link to="/projects/habitio-details">
            <strong style={{ color: "orange" }}>Habitio</strong>
          </Link>{" "}
          to App Store ️
        </Text>
      </Timeline>
      <Timeline icon={FaCheck} skipTrail={true}>
        <Text fontSize="large">
          Finished{" "}
          <Link to="/projects/habitio-details">
            <strong style={{ color: "orange" }}>Habitio</strong>
          </Link>
        </Text>
      </Timeline>
      {/* 2021 */}
      <Box mb={8} mt={8}>
        <Text fontSize="x-large" fontWeight={600} color="orange">
          2021
        </Text>
      </Box>
      <Timeline icon={FaTools}>
        <Text fontSize="large">
          Built my personal Portfolio with <strong>TypeScript</strong> & <strong>GatsbyJs</strong>
        </Text>
      </Timeline>
      <Timeline icon={FaFlagCheckered}>
        <Text fontSize="large">
          Started building{" "}
          <Link to="/projects/habitio-details">
            <strong style={{ color: "orange" }}>Habitio</strong>
          </Link>
        </Text>
      </Timeline>
      <Timeline icon={FaGraduationCap}>
        <Text fontSize="large">Finished one year worth of ICT studies</Text>
      </Timeline>
      <Timeline icon={FaMobileAlt}>
        <Text fontSize="large">
          Finished{" "}
          <Link to="/projects/gotrain-mobile-details">
            <strong style={{ color: "orange" }}>GoTrain</strong>
          </Link>{" "}
          as my first ever mobile (<strong>React-Native</strong>) project for school
        </Text>
      </Timeline>
      <Timeline icon={FaReact} skipTrail={true}>
        <Text fontSize="large">
          Started learning <strong>React</strong> and <strong>React-Native</strong>
        </Text>
      </Timeline>
      {/* 2020 */}
      <Box mb={8} mt={8}>
        <Text fontSize="x-large" fontWeight={600} color="orange">
          2020
        </Text>
      </Box>
      <Timeline icon={FaTools}>
        <Text fontSize="large">
          Built <strong style={{ color: "orange" }}>GoTrain-Web</strong> with vanilla{" "}
          <strong>JavaScript</strong> and <strong>JQuery</strong>
        </Text>
      </Timeline>
      <Timeline icon={FaGraduationCap} skipTrail={true}>
        <Text fontSize="large">
          Started ICT studies in <strong>Haaga-Helia UAS</strong>
        </Text>
      </Timeline>
      {/* 2019 */}
      <Box mb={8} mt={8}>
        <Text fontSize="x-large" fontWeight={600} color="orange">
          2019
        </Text>
      </Box>
      <Timeline icon={FaDatabase}>
        <Text fontSize="large">
          Dug deeper under the hood of JavaScript and also started to study more data structures &
          algorithms
        </Text>
      </Timeline>
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
