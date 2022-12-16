const searchButton = document.querySelector(".search");

const getWeather = async () => {
  const weatherInput = document.querySelector(".weather").value;

  const weatherData = await fetch();
  const json = await weatherData.json();

  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  const lon = document.createElement("p");
  lon.innerText = json.coord.lon;

  const lat = document.createElement("p");
  lat.innerText = json.coord.lat;

  const city = document.createElement("p");
  city.innerText = json.name;

  const marker = document.createElement("img");
  marker.src = "marker.png";
  marker.className = "marker";

  wrapper.append(marker, city, lon, lat);

  const folded = document.querySelector(".folded");
  folded.append(wrapper);
};

searchButton.addEventListener("click", getWeather);
