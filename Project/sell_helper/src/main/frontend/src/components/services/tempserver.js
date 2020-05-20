export function setTempStoreage(t) {
  tempStateStorage = t;
}
export function getTempStorage() {
  return tempStateStorage;
}
export function getServer() {
  return server;
}

export function setServer(s) {
  server = s;
}
let tempStateStorage;
let server = false;
