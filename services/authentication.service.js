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
