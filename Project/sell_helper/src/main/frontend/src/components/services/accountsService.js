import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/account";

export function getAccounts(gameName, server, characters) {
  let values = "";
  characters.map((c) => {
    values = values + c.name + "," + c.lvl + "&";
  });

  values = values.substring(0, values.length - 1);

  return http.get(`${apiEndpoint}/${gameName}/${server}/${values}`);
}

export function saveAccount(account) {
  return http.post(apiEndpoint, account);
}

export function getAllAccounts() {
  return http.get(apiEndpoint);
}
export function deleteAccount(id) {
  return http.delete(accountUrl(id));
}

function accountUrl(id) {
  return `${apiEndpoint}/${id}`;
}
