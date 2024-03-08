import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Img } from "@chakra-ui/react";
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
  return (
    <FullScreenSection
      color="#e5e7eb"
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imageSrc={project.imageSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
