import React, { useState, useEffect, useRef } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";
import { Chart, Line } from "react-chartjs-2";
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

const API_TOKEN_ALPHA = process.env.API_TOKEN_ALPHA;

const BTC_WEEKLYTS_ENDPOINT =
  "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=IDR&apikey=" +
  API_TOKEN_ALPHA;
const ETH_WEEKLYTS_ENDPOINT =
  "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=ETH&market=IDR&apikey=" +
  API_TOKEN_ALPHA;
const FinanceCard = () => {
  const [btcTimeSeries, setBtcTimeSeries] = useState([]);
  const [btcTimeSeriesLabel, setBtcTimeSeriesLabel] = useState([]);
  const [ethTimeSeries, setEthTimeSeries] = useState([]);
  var options = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  useEffect(() => {
    axios(BTC_WEEKLYTS_ENDPOINT, {
      method: "GET",
      headers: { "User-Agent": "request" },
    })
      .then((response) => {
        var weeklyData = "Time Series (Digital Currency Weekly)";
        var weeklyDataObject = response.data[weeklyData];
        var btcTimeSeries = [];
        var timeSeriesLabel = [];
        for (var key in weeklyDataObject) {
          timeSeriesLabel.push(key);
          btcTimeSeries.push(
            parseInt(weeklyDataObject[key]["4a. close (IDR)"]) / 1000000000
          );
        }
        timeSeriesLabel = timeSeriesLabel.reverse();
        btcTimeSeries = btcTimeSeries.reverse();
        setBtcTimeSeriesLabel(timeSeriesLabel);
        setBtcTimeSeries(btcTimeSeries);
        // console.log(btcTimeSeries["2019-04-21"]["1a. open (IDR)"]);
        // console.log(response.data[weeklydata].length);
      })
      .catch((error) => console.error(error));
    axios(ETH_WEEKLYTS_ENDPOINT, {
      method: "GET",
      headers: { "User-Agent": "request" },
    })
      .then((response) => {
        var weeklyData = "Time Series (Digital Currency Weekly)";
        var weeklyDataObject = response.data[weeklyData];
        var ethTimeSeries = [];
        for (var key in weeklyDataObject) {
          ethTimeSeries.push(
            parseInt(weeklyDataObject[key]["4a. close (IDR)"]) / 1000000000
          );
        }
        ethTimeSeries = ethTimeSeries.reverse();
        setEthTimeSeries(ethTimeSeries);
        // console.log(btcTimeSeries["2019-04-21"]["1a. open (IDR)"]);
        // console.log(response.data[weeklydata].length);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Container maxW="container.lg">
        <Heading as="h4" size="md">
          Crypto Currencies Closing Price
        </Heading>
        <Text>
          Fetched from{" "}
          <a href="https://www.alphavantage.co/documentation/">
            Alphavantage Api
          </a>
        </Text>
        <Line
          options={options}
          datasetIdKey="id"
          data={{
            labels: btcTimeSeriesLabel,
            datasets: [
              {
                id: 1,
                fill: true,
                label: "BTC",
                data: btcTimeSeries,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                pointBorderWidth: "0.1",
              },

              {
                id: 2,
                fill: true,
                label: "ETH",
                data: ethTimeSeries,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.65)",
                pointBorderWidth: "0.1",
              },
            ],
          }}
        />
      </Container>
    </>
  );
};

export default FinanceCard;
