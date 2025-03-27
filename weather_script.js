const fetch = require('node-fetch');

// Replace with your weather API key and endpoint
const API_KEY = 'ebdf262bdc7df310d016b06e4d7f8ab9';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data by city name
async function getWeatherByCity(city) {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.statusText}`);
        }
        const data = await response.json();
        return {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
        };
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

// Example usage
(async () => {
    const city = 'Madrid';
    const weather = await getWeatherByCity(city);
    if (weather) {
        console.log(`Weather in ${weather.city}:`);
        console.log(`Temperature: ${weather.temperature}°C`);
        console.log(`Description: ${weather.description}`);
    } else {
        console.log('Could not retrieve weather data.');
    }
})();