import React from "react";
import { Box, Flex, Stack, Center, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box w="100%" p={1}>
        <Divider mb={4} />
        <Flex>
          <Center w="100px" flex="1">
            <Stack>
              <Center w="100px" flex="1">
                Github
              </Center>
              <Center w="100px" flex="1">
                Linkedin
              </Center>
            </Stack>
          </Center>
          <Center w="100px" flex="1">
            <Stack>
              <Center w="100px" flex="1">
                Instagram
              </Center>
              <Center w="100px" flex="1">
                Youtube
              </Center>
            </Stack>
          </Center>
        </Flex>
        <Box w="100%" p={1} mt={8}>
          <Center>Martin Hizkia 2021</Center>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
