import decode from "jwt-decode";

function setToken(token) {
  localStorage.setItem("jwtToken", token);
}

function getToken() {
  return localStorage.getItem("jwtToken");
}

function logout() {
  localStorage.removeItem("jwtToken");
}

function loggedIn() {
  const token = this.getToken();
  // token exists && is not expired
  return !!token;
}

function decodeTokenGetId() {
  const decodedToken = decode(getToken());
  return decodedToken.id;
}

export const userService = {
  setToken: setToken,
  getToken: getToken,
  loggedIn: loggedIn,
  logout: logout,
  decodeTokenGetId: decodeTokenGetId
};
