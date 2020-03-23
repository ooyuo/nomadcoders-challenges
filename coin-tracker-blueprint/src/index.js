const API_URL = "https://api.coinpaprika.com/v1/tickers";
const coinList = document.getElementById("coin-tracker__list");

function fetchData() {
  fetch(API_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let stringJson = JSON.stringify(myJson);
      let coinObj = JSON.parse(stringJson);
      //console.log(coinObj);
      for (let i = 0; i < coinObj.length; i++) {
        const li = document.createElement("li");
        coinList.appendChild(li);
        li.innerHTML = `${coinObj[i].name}: ${coinObj[i].quotes.USD.price}`;
      }
    });
}
function setInter() {
  setInterval(fetchData, 5000);
}

function init() {
  fetchData();
  setInter();
}
init();
