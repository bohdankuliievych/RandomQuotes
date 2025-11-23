function saveInLocalStorage(key, value) {
  if (typeof key !== "string") {
    console.error("Invalid key");
    return;
  }
  try {
    const jsonVal = JSON.stringify(value);
    localStorage.setItem(key, jsonVal);
  } catch (error) {
    console.error("An error occcured", error);
  }
}

function readFromLocalStorage(key) {
  let value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function removeLocalItem(key) {
  localStorage.removeItem(key);
}

function clearLocalStorage() {
  localStorage.clear();
}

export { saveInLocalStorage, readFromLocalStorage, removeLocalItem, clearLocalStorage };
