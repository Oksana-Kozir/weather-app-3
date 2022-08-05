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
  if (searchInput.value) {
    h2.innerHTML = `${searchInput.value}`;
  }
}
let searchButton = document.querySelector("button");
searchButton.addEventListener("click", search);
