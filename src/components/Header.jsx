import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: batakankarakaya@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://www.github.com/bakankaya",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/behzat-atakan-karakaya/",
  },
  {
    icon: faXTwitter,
    url: "https://twitter.com/bakankaya_",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".5s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#202c33"
      ref={headerRef}
      borderBottom="2px solid #d68f59"
    >
      <Box color="#e5e7eb" margin="0 auto">
        <HStack
          px={[4,12]}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={[4,8]}>
              {socials.map(({ icon, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={icon} size="xl" key={url} />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={[4,8]} fontSize={["md","lg"]}>
              <a href="#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contactme" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
