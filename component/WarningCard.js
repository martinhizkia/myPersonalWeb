import axios from "axios";
import { React, useState, useEffect } from "react";
import CountUp from "react-countup";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Alert,
  AlertIcon,
  Heading,
  Text,
  Container,
  Box,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";

const WarningCard = () => {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [dead, setDead] = useState(0);
  const [date, setDate] = useState(null);

  useEffect(() => {
    axios("https://covid19.mathdro.id/api/countries/id", {
      method: "GET",
    })
      .then((res) => {
        setConfirmed(res.data.confirmed.value);
        setRecovered(res.data.recovered.value);
        setDead(res.data.deaths.value);
        setDate(res.data.lastUpdate);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Container maxW="container.lg">
        <Alert status="warning">
          <AlertIcon />
          Stay Safe! Wear Mask Everytime and Everywhere!
        </Alert>
        <Box m="0 auto 20px auto" />
        <Heading as="h4" size="md">
          COVID 19 Cases (Indonesia)
        </Heading>
        <Text>
          Fetched from{" "}
          <a href="https://github.com/mathdroid/covid-19-api">COVID-19 Api </a>
        </Text>
        <Box m="0 auto 20px auto" />
        <Flex flexDirection="row">
          <Box w="100%" h="50" p={3} borderWidth="1px" borderRadius="md">
            <Stat>
              <StatLabel>Total Confirmed</StatLabel>
              <StatNumber>
                <CountUp end={confirmed} duration={1} separator="." />
              </StatNumber>
              <StatHelpText>{new Date(date).toDateString()}</StatHelpText>
            </Stat>
          </Box>
          {/* <Box m="0 10px 0 10px" />
          <Box w="100%" h="50" p={3} borderWidth="1px" borderRadius="md">
            <Stat>
              <StatLabel>Total Recovered</StatLabel>
              <StatNumber>
                <CountUp end={recovered} duration={2} separator="." />
              </StatNumber>
              <StatHelpText>{new Date(date).toDateString()}</StatHelpText>
            </Stat>
          </Box> */}
          {/* <Box m="0 10px 0 10px" />
          <Box w="100%" h="50" p={3} borderWidth="1px" borderRadius="md">
            <Stat>
              <StatLabel>Total Deaths</StatLabel>
              <StatNumber>
                <CountUp end={dead} duration={2} separator="." />
              </StatNumber>
              <StatHelpText>{new Date(date).toDateString()}</StatHelpText>
            </Stat>
          </Box> */}
        </Flex>
      </Container>
    </>
  );
};

export default WarningCard;
