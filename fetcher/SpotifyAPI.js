import axios from "axios";
import querystring from "querystring";

const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

export const getCurrentTrack = async (access_token) => {
  return fetch(NOW_PLAYING_ENDPOINT, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
