import http from "./httpService";
const apiEndpoint = process.env.REACT_APP_API_URL;
let selectedAccounts = [];
let server = false;

export function setSelectedAccounts(accounts) {
  http.delete(apiEndpoint + "/selectedaccount");
  if (Array.isArray(accounts)) {
    return accounts.map((account) => {
      http.post(apiEndpoint + "/selectedaccount", account);
    });
  } else {
    return http.post(apiEndpoint + "/selectedaccount", accounts);
  }
}
export function getSelectedAccounts() {
  return http.get(apiEndpoint + "/selectedaccount");
}

export function getSelectedServerName() {
  return http.get(apiEndpoint + "/isserverselected");
}

export function setSelectedServerName(s) {
  return http.post(apiEndpoint + "/isserverselected", s);
}

export function clearSelectedAccounts() {
  return http.delete(apiEndpoint + "/selectedaccount");
}
export function clearSelectedServer() {
  return http.delete(apiEndpoint + "/isserverselected");
}
