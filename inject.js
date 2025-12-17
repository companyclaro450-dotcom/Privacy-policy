// Este script se inyecta en https://discord.com/app




// El content script lee el token de la URL (?discordtoken=TOKEN) y lo inyecta en localStorage
function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var discordtoken = urlParams.get("discordtoken");
if (discordtoken) {
  localStorage.clear();
  deleteAllCookies();
  localStorage.setItem('token', `"${discordtoken}"`);
  setTimeout(() => {
    window.location.replace("/app");
  }, 500);
}
