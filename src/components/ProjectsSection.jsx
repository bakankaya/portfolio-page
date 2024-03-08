import React from "react";
import { useState } from "react";
import { Box, Button, Heading, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";
import img from "../images/photo1.jpg";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: img,
    url: "https://github.com/rgommezz/react-native-offline",
  },
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: img,
    url: "https://github.com/rgommezz/react-native-offline",
  },
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: img,
    url: "https://github.com/rgommezz/react-native-offline",
  },
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: img,
    url: "https://github.com/rgommezz/react-native-offline",
  },
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: img,
    url: "https://github.com/rgommezz/react-native-offline",
  },
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: img,
    url: "https://github.com/rgommezz/react-native-offline",
  },
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: img,
    url: "https://github.com/rgommezz/react-native-offline",
  },
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: img,
    url: "https://github.com/rgommezz/react-native-offline",
  },
];

const ProjectsSection = () => {
  const [itemList, setItemList] = useState(3);
  const startElement = document.getElementById("section-start");
  const endElement = document.getElementById("section-end");

  function handleClick() {
    if (itemList == 3) {
      setItemList(projects.length);
      endElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      setItemList(3);
      startElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <FullScreenSection
      color="#e5e7eb"
      p={8}
      alignItems="flex-start"
      spacing={8}
      id="section-start"
    >
      <Heading as="h1" id="projects-section" marginTop="5vh" alignSelf="center">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={["1","repeat(3,minmax(0,1fr))"]}
        gridGap={8}
      >
        {projects.slice(0, itemList).map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imageSrc={project.imageSrc}
          />
        ))}
      </Box>
      <Button id="section-end" width="full" onClick={handleClick}>
        {itemList === 3 ? (
          <HStack spacing={2} alignItems="center">
            <FontAwesomeIcon icon={faAnglesDown} size="1x" />
            <p>Show More</p>
            <FontAwesomeIcon icon={faAnglesDown} size="1x" />
          </HStack>
        ) : (
          <HStack spacing={2} alignItems="center">
            <FontAwesomeIcon icon={faAnglesUp} size="1x" />
            <p>Show Less</p>
            <FontAwesomeIcon icon={faAnglesUp} size="1x" />
          </HStack>
        )}
      </Button>
    </FullScreenSection>
  );
};

export default ProjectsSection;
