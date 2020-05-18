import http from "./httpService";
const apiEndpoint = process.env.REACT_APP_API_URL + "/game";

export function getGames() {
  return http.get(apiEndpoint);
}

export function getGame(gameName) {
  return http.get(`${apiEndpoint}/${gameName}`);
}
