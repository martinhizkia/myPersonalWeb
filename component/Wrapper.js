import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import DarkSwitch from "./DarkSwitch.js";

const Wrapper = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "white",
    dark: "#171717",
  };
  const navHover = {
    light: "gray.600",
    dark: "gray.300",
  };
  const color = {
    light: "black",
    dark: "white",
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;
  return (
    <div>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHover[colorMode] }}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHover[colorMode] }}
            >
              Blog
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHover[colorMode] }}
            >
              About
            </Button>
          </NextLink>
        </Box>
        <DarkSwitch />
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </div>
  );
};

export default Wrapper;
