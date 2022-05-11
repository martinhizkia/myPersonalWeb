import Head from "next/head";
import Wrapper from "../component/Wrapper.js";
import { MdSettings, MdCheckCircle } from "react-icons/md";
import Footer from "../component/Footer.js";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Divider,
  Image,
  Box,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
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
      <Head>About Me</Head>
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
            Tech enthusiast who likes to learn new things, especially learning
            About cutting-edge tech. Enjoying my spare time by playing games,
            reading news and facts, watching netflix LMAO. Interested in
            computer network, database, and cloud computing.
          </Text>
          <Box mt={4} mb={4} />
          <Image borderRadius="md" src="./rko.jpg" />
          <Box mt={2} mb={2} />
          <Heading>Tech</Heading>
          <Divider mt={1} mb={1} />
          <List spacing={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Web Development (React, Django, Nodejs, Nextjs, MaterializeCSS,
              and ChakraUI)
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Mobile Development (Flutter and Android Studio)
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Databases (Postgres and Firebase)
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Computer Network
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Cloud Computing
            </ListItem>
          </List>
          <Box mt={2} mb={2} />
          <Heading>Games</Heading>
          <Divider mt={1} mb={1} />
          <List spacing={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Counter Strike: Global Offensive
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              DOTA 2
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Valorant
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Cities: Skyline
            </ListItem>
          </List>
          <Box mt={2} mb={2} />
          <Heading>Movies and Films</Heading>
          <Divider mt={1} mb={1} />
          <List spacing={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Mostly any movie/film related to wizardry or witchcraft, since i wanna be an..... Auror
            </ListItem>
          </List>
          <Divider mt={4} mb={4} />

          <SpotifyCard />
        </Flex>
        <Footer />
      </Stack>
    </Wrapper>
  );
}
