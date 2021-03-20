import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import {
  useColorMode,
  LinkBox,
  Box,
  LinkOverlay,
  Flex,
  Icon,
  Heading,
} from "@chakra-ui/react";

const ContactMe = () => {
  return (
    <>
      <Box w="100%" p={4}>
        <Heading as="h4" size="md">
          Contact Me
        </Heading>
        <Box m="0 auto 10px auto" />
        <Flex>
          <Flex flexDirection="row">
            <LinkBox w="100%" h="50" p={3} borderWidth="1px" borderRadius="md">
              <LinkOverlay href="https://www.instagram.com/hizkiamartin/">
                <Icon as={FaInstagram} boxSize="10" />
              </LinkOverlay>
            </LinkBox>
            <Box m="0 10px 0 10px" />
            <LinkBox w="100%" h="50" p={3} borderWidth="1px" borderRadius="md">
              <LinkOverlay href="https://twitter.com/martin_hizkia">
                <Icon as={FaTwitter} boxSize="10" />
              </LinkOverlay>
            </LinkBox>
            <Box m="0 10px 0 10px" />
            <LinkBox w="100%" h="50" p={3} borderWidth="1px" borderRadius="md">
              <LinkOverlay href="https://github.com/martinhizkia/">
                <Icon as={FaGithub} boxSize="10" />
              </LinkOverlay>
            </LinkBox>
            <Box m="0 10px 0 10px" />
            <LinkBox w="100%" h="50" p={3} borderWidth="1px" borderRadius="md">
              <LinkOverlay href="https://www.linkedin.com/in/martinhizkia/">
                <Icon as={FaLinkedin} boxSize="10" />
              </LinkOverlay>
            </LinkBox>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default ContactMe;
