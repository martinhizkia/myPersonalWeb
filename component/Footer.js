import React from "react";
import { Box, Flex, Stack, Center, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box w="100%" p={1}>
        <Divider mb={4} />
        <Box w="100%" p={1} mt={8}>
          <Center>&#169; Martin Hizkia 2021</Center>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
