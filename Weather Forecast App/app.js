// Constants
const apiKey = 'rHjHbwVVIzjLTYARgyWzoBM1yDn3Q1GX'
const weatherInfoElement = document.getElementById('weatherInfo');
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');

// Event listeners
searchButton.addEventListener('click', searchWeather);

// Functions
async function searchWeather() {
    const location = locationInput.value;

    if (!location) {
        alert('Please enter a location.');
        return;
    }

    const weatherData = await fetchWeatherData(location);

    if (weatherData && weatherData.data) {
        displayWeather(weatherData);
    } else {
        alert('Location data not available. Please check the format and try again.');
    }
}

async function fetchWeatherData(location) {
    try {
        const response = await fetch(`https://api.tomorrow.io/v4/timelines?location=${location}&fields=temperature_2m,weathercode&apikey=${apiKey}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error(error);
    }
    return null;
}

function displayWeather(data) {
    const { name, temperature_2m, weathercode } = data.data.timelines[0];
    const description = weathercode.value;
    const temperature = temperature_2m.value;

    const weatherInfo = `
        <h2>Weather in ${name}</h2>
        <p>Condition: ${description}</p>
        <p>Temperature: ${temperature} &#8451;</p>
    `;

    weatherInfoElement.innerHTML = weatherInfo;
}
