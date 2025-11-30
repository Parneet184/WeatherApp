<<<<<<< HEAD
# Weather App 🌤️

A **React + Vite** application that fetches **real-time weather data** from a public API and displays structured information for any searched city.

---

## Features

- Fetches live weather data using a REST API.
- Extracted data fields:
  - `city`: Name of the city (`data.name`)
  - `temp`: Current temperature (`data.main.temp`)
  - `tempMin`: Minimum temperature (`data.main.temp_min`)
  - `tempMax`: Maximum temperature (`data.main.temp_max`)
  - `weather`: Weather description (`data.weather[0].description`)
  - `humidity`: Humidity percentage (`data.main.humidity`)
  - `feelsLike`: Feels-like temperature (`data.main.feels_like`)
  - `icon`: Weather condition icon (`data.weather[0].icon`)

---

## Technology Stack

- **Frontend:** React, Vite
- **State Management:** React hooks
- **API:** OpenWeather (or any compatible weather API)
- **Environment Variables:** `.env` used for API keys

---

=======
