import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from "../images/avatar.png";

const greeting = "Hello, I am Atakan!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React and UI design";

const LandingSection = () => (
  <FullScreenSection color="#e5e7eb" justifyContent="center" alignItems="center">
    <VStack spacing={16}>
      <VStack spacing={4} alignItems="center">
        <Avatar
          src={avatar}
          size="2xl"
          name="bakankaya"
          border="2px solid #d68f59"
        />
        <Heading as="h4" size="lg" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size="xl" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
