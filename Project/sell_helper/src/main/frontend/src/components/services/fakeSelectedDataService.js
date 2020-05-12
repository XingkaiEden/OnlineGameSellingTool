let selectedAccounts = [];
let server = false;

export function setSelectedAccounts(accounts) {
  selectedAccounts = accounts;
}
export function getSelectedAccounts() {
  return selectedAccounts;
}

export function getServer() {
  return server;
}

export function setServer(s) {
  server = s;
}
