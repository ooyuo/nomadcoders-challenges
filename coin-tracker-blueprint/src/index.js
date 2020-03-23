const API_URL = "https://api.coinpaprika.com/v1/tickers";
const coinTracker = document.getElementById("coin-tracker__list");

fetch(API_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    const coins = JSON.parse(myJson);
    console.log(coins);
  });