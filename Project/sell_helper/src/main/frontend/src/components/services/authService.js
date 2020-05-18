import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndPoint = "/auth";
const tokenKey = "token";

http.setJWT(getJWT()); // give http the jwt instead to ask it from http. Solving Bi-directional Dependencies
export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  //posted the entered username and password into server, then
  // store the json web token(jwt) into localstorage
  localStorage.setItem(tokenKey, jwt);
}
export function logout() {
  localStorage.removeItem(tokenKey);
}

export function logUserWithJWT(jwt) {
  localStorage.setItem(tokenKey, jwt);
}
export function getCurrentUserJWT() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
//the different between getCurrentUserJWT and getJWT is the former gonna return user object
// but in getJWT we only want to get the token
export function getJWT() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  logUserWithJWT,
  getCurrentUserJWT,
  getJWT,
};
