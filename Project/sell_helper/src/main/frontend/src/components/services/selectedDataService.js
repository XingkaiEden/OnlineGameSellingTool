import http from "./httpService";
const apiEndpoint = process.env.REACT_APP_API_URL;
let selectedAccounts = [];
let server = false;

export function setSelectedAccounts(accounts) {
  http.delete(apiEndpoint + "/selectedaccount");
  return accounts.forEach((account) => {
    http.post(apiEndpoint + "/selectedaccount", account);
  });
}
export function getSelectedAccounts() {
  return http.get(apiEndpoint + "/selectedaccount");
}

export function getServer() {
  return http.get(apiEndpoint + "/isserverselected");
}

export function setServer(s) {
  return http.post(apiEndpoint + "/isserverselected", s);
}
