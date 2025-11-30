# WeatherApp
React + Vite Weather App fetching and displaying real-time weather data from an API.

Features & Data:
Fetches real-time weather data using API.

Extracted data fields for each city:

city: City name (data.name)

temp: Current temperature (data.main.temp)

tempMin: Minimum temperature (data.main.temp_min)

tempMax: Maximum temperature (data.main.temp_max)

weather: Weather description (data.weather[0].description)

humidity: Humidity percentage (data.main.humidity)

feelsLike: Feels-like temperature (data.main.feels_like)

icon: Weather condition icon (data.weather[0].icon)

Technologies Used:

Frontend: React, Vite

API: OpenWeather (or any weather API)

Environment Variables: API key stored in .env for security
