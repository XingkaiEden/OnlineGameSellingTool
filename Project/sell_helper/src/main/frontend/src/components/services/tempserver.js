let tempStateStorage = {};

export function setTempStoreage(t) {
  tempStateStorage = t;
}
export function getTempStorage() {
  return tempStateStorage;
}
