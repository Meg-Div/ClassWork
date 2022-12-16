const searchButton = document.querySelector(".search");

const getWeather = async () => {
  const weatherInput = document.querySelector(".weather").value;

  const weatherData = await fetch();
  const json = await weatherData.json();

  const weatherTemp = document.createElement("p");
  weatherTemp.innerText = json.main.temp;

  const weatherLocation = document.createElement("p");
  weatherLocation.innerText = json.name;

  const mainContainer = document.querySelector(".main-container");
  mainContainer.append(weatherTemp, weatherLocation);
};

searchButton.addEventListener("click", getWeather);
