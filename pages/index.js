import Head from "next/head";
import Wrapper from "../component/Wrapper.js";
import Footer from "../component/Footer.js";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import SpotifyCard from "../component/SpotifyCard.js";

export default function Index() {
  const { colorMode } = useColorMode();
  const secColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <Wrapper>
      <Head>Martin HP - Home</Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Martin Hizkia
          </Heading>
          <Text>
            I just write and post what I like, hope that's interesting enough
            for you to follow 😊 Tidak sulit bikin saya bahagia, cukup dengan
            tidak spam di e-mail saya. Thanks!
          </Text>
          <Divider mt={4} />
        </Flex>
        <Heading size="lg">This Web Tech-Stack</Heading>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Functionality</Th>
              <Th>Source</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>NextJs</Td>
              <Td>Server Rendering and Routing</Td>
              <Td>
                <a href="https://nextjs.org/">nextjs.org</a>
              </Td>
            </Tr>
            <Tr>
              <Td>ReactJs</Td>
              <Td>Frontend</Td>
              <Td>
                <a href="https://reactjs.org/">reactjs.org</a>
              </Td>
            </Tr>
            <Tr>
              <Td>Vercel</Td>
              <Td>Deployment</Td>
              <Td>
                <a href="https://vercel.com/">vercel.com</a>
              </Td>
            </Tr>
            <Tr>
              <Td>Chakra UI</Td>
              <Td>Frontend</Td>
              <Td>
                <a href="https://chakra-ui.com/">chakra-ui.com</a>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <SpotifyCard />
        <Footer />
      </Stack>
    </Wrapper>
  );
}
