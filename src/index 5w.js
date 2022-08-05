let now = new Date();
let nowDay = document.querySelector("#day-of-the-week");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
nowDay.innerHTML = `${day}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enterTheCity");

  let h2 = document.querySelector("h2");
  let apiKey = "1aab64290751190d2719fa18bf8fa94d";
  let units = "metric";

  let city = searchInput;

  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city.value}&units=${units}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

  if (searchInput.value) {
    h2.innerHTML = `${searchInput.value}`;
  }
}
let searchButton = document.querySelector("button");
searchButton.addEventListener("click", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let searchInput = document.querySelector("#enterTheCity");
  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    h1.innerHTML = `${temperature}°C`;
  }
}

navigator.geolocation.getCurrentPosition(showPosition);
