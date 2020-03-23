const API_URL = "http://ip-api.com/json/";
const myGeo = document.getElementById("myGeo");


fetch(API_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    const {
        country, regionName, city
    } = myJson;
    myGeo.textContent = `국가: ${country}
        지역: ${regionName}
        도시: ${city}
    `;
  });

