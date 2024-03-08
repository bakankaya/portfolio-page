import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#202c33">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={14}
        >
          <p>bakankaya • © 2024</p>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
