const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const weatherOutput = document.getElementById('weather-output');


const apiKey = 'adc07217bd715d3b85e3c810f4513798';
searchButton.addEventListener('click', fetchWeather);
//fetch τα δεδομενα
function fetchWeather() {
  const cityName = cityInput.value.trim();
  if (cityName === "") {
    weatherOutput.textContent = "Please enter a city name.";
    return;
  }

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found.");
      }
      return response.json();
    })
    .then(data => {
      const { name, main, weather } = data;
      const temp = main.temp;
      const description = weather[0].description;

      weatherOutput.innerHTML = `
        <strong>${name}</strong><br>
        Temperature: ${temp}°C<br>
        Description: ${description}
      `;
    })
    .catch(error => {
      weatherOutput.textContent = error.message;
    });
}
