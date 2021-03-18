import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import querystring from "querystring";
import {
  Image,
  Progress,
  Box,
  Flex,
  Skeleton,
  Stack,
  SkeletonCircle,
  SkeletonText,
  Center,
} from "@chakra-ui/react";

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const refresh_token = process.env.REF_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

const SpotifyCard = () => {
  const [token, setToken] = useState(null);
  const [artist, setArtist] = useState("");
  const [track, setTrack] = useState("");
  const [time, setTime] = useState(0);
  const [img, setImg] = useState("");
  const [dur, setDur] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [album, setAlbum] = useState("");

  useEffect(() => {
    axios(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token,
      }),
    })
      .then(function (response) {
        setToken(response.data.access_token);
      })
      .catch(function (error) {
        console.log("ERROR SIALAN2222");
      });
  }, []);

  useInterval(() => {
    axios(NOW_PLAYING_ENDPOINT, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setIsLoading(false);
        var len = response.data.item.artists.length;
        setTrack(response.data.item.name);
        setAlbum(response.data.item.album.name);
        setTime(response.data.progress_ms);
        setImg(response.data.item.album.images[2].url);
        setDur(response.data.item.duration_ms);
        setArtist(
          len >= 4
            ? response.data.item.artists[0].name +
                ", " +
                response.data.item.artists[1].name +
                ", " +
                response.data.item.artists[2].name +
                ", " +
                response.data.item.artists[3].name
            : len >= 3
            ? response.data.item.artists[0].name +
              ", " +
              response.data.item.artists[1].name +
              ", " +
              response.data.item.artists[2].name
            : len >= 2
            ? response.data.item.artists[0].name +
              ", " +
              response.data.item.artists[1].name
            : response.data.item.artists[0].name
        );
      })
      .catch(function (error) {});
  }, 1000);

  if (isLoading == false) {
    return (
      <Box w="100%" p={4} borderWidth="1px" borderRadius="xs">
        <Flex>
          <Center flex="1">
            <Image
              borderRadius="full"
              src={img}
              fallbackSrc="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
              boxSize="64px"
              alt="Artist"
            />
          </Center>
          <Box flex="6">
            <h1>
              {artist || "Currently"} - {track || "not playing"}
            </h1>
            <Progress
              value={parseInt((100 * time) / dur)}
              size="xs"
              colorScheme="green"
            />
            <div>{album || "-"}</div>
            <h2>{millisToMinutesAndSeconds(time)}</h2>
          </Box>
        </Flex>
      </Box>
    );
  } else {
    return (
      <Box w="100%" p={4} borderWidth="1px">
        <Flex>
          <Center flex="1">
            <SkeletonCircle
              size="64px"
              startColor="pink.500"
              endColor="orange.500"
            />
          </Center>
          <Box flex="6">
            <SkeletonText
              noOfLines={3}
              spacing="4"
              startColor="pink.500"
              endColor="orange.500"
            />
          </Box>
        </Flex>
      </Box>
    );
  }
};

export default SpotifyCard;
