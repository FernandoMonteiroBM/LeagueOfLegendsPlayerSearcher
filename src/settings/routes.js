import { API_KEY } from "./apiKey";

const baseRoute = "https://br1.api.riotgames.com";

export const ROUTES = {
  baseRoute,
  summoner: {
    getDetails: {
      url: (summonerName) =>
        `/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`,
      type: "get",
    },
  },
  rank: {
    getDetails: {
      url: (summonerId) =>
        `/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${API_KEY}`,
      type: "get",
    },
  },
  champion: {
    getDetails: {
      url: (summonerId) =>
        `/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${API_KEY}`,
      type: "get",
    },
  },
};
