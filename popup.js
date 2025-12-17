document.getElementById('login').addEventListener('click', async () => {
  const token = document.getElementById('token').value;
  if (!token) {
    alert('Por favor ingresa tu token de Discord.');
    return;
  }
  // Cerrar todas las pestañas de Discord
  chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].url && tabs[i].url.includes("discord.com")) {
        chrome.tabs.remove(tabs[i].id);
      }
    }
    setTimeout(function () {
      chrome.tabs.create({ url: "https://discord.com/?discordtoken=" + encodeURIComponent(token) });
    }, 500);
  });
});
