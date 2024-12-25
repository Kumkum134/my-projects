document.getElementById('themeToggle').addEventListener('change', function () {
    if (this.checked) {
        
        document.body.classList.add('light-mode');
        document.querySelector('.toggle-mode span').textContent = '';
        document.getElementById("mode").innerHTML = "Light";
        document.getElementById('ab3').addEventListener('change', function () {
            document.body.style.backgroundColor = "yellow";
        });
    } else {
        
        document.body.classList.remove('light-mode');
        document.querySelector('.toggle-mode span').textContent = '';
        document.getElementById("mode").innerHTML = "Dark";
    }
});

document.querySelector('.location-button').addEventListener('click', () => {
    const city = "Ballabgarh";
    getWeatherData(city).then(updateWeatherUI).catch(err => {
        alert(`Error: ${err.message}`);
    });
});

const apiKey = "e177466e572d4138bb208c558e2a654b";
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

const getWeatherData = async (city) => {
    try {
        const response = await fetch(`${weatherApiUrl}${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch weather data: ${response.statusText}`);
        }
        const weatherData = await response.json();
        return weatherData;
    } catch (err) {
        alert(`Error: ${err.message}`);
    }
};

const getForecastData = async (city) => {
    try {
        const response = await fetch(`${forecastApiUrl}${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch forecast data: ${response.statusText}`);
        }
        const forecastData = await response.json();
        return forecastData;
    } catch (err) {
        alert(`Error: ${err.message}`);
    }
};

const updateWeatherUI = (data) => {
    if (data && data.weather && data.weather.length > 0) {
        document.querySelector('.time-location h2').textContent = data.name;
        document.querySelector('.time-location h1').textContent = new Date().toLocaleTimeString();
        document.querySelector('.time-location p').textContent = new Date().toLocaleDateString();

        document.querySelector('#ab1 h2').textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector('#ab1 p:nth-child(2)').textContent = `Feels like: ${Math.round(data.main.feels_like)}°C`;
        document.querySelector('#ab1 p:nth-child(3)').textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);

        const iconCode = data.weather[0].icon;
        document.querySelector('#img1').src = `http://openweathermap.org/img/wn/${iconCode}.png`;

        document.querySelector('.weather-details .detail-item:nth-child(1) p').textContent = `${data.main.humidity}% Humidity`;
        document.querySelector('.weather-details .detail-item:nth-child(2) p').textContent = `${data.wind.speed} km/h Wind Speed`;
        document.querySelector('.weather-details .detail-item:nth-child(3) p').textContent = `${data.main.pressure} hPa Pressure`;
        document.querySelector('.weather-details .detail-item:nth-child(4) p').textContent = `UV Index: 8`; 

        getForecastData(data.name).then(forecastData => {
            if (forecastData && forecastData.list) {
                const dailyForecast = document.querySelector('.forecast ul');
                dailyForecast.innerHTML = forecastData.list
                    .filter(item => item.dt_txt.endsWith("12:00:00")) 
                    .slice(0, 5) 
                    .map(item => {
                        const date = new Date(item.dt * 1000);
                        return `<li><span>${Math.round(item.main.temp)}°C</span> ${date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' })}</li>`;
                    })
                    .join('');

                const hourlyForecast = document.querySelector('.hourly-forecast #ab3');
                hourlyForecast.innerHTML = forecastData.list
                    .filter(item => item.dt_txt.endsWith("00:00:00") || item.dt_txt.endsWith("03:00:00") || item.dt_txt.endsWith("06:00:00") || item.dt_txt.endsWith("09:00:00") || item.dt_txt.endsWith("12:00:00") || item.dt_txt.endsWith("15:00:00") || item.dt_txt.endsWith("18:00:00") || item.dt_txt.endsWith("21:00:00")) 
                    .slice(0, 8) 
                    .map(item => {
                        const date = new Date(item.dt * 1000);
                        return `<div class="hour">
                    <p>${date.getHours()}:00</p>
                    <p>${Math.round(item.main.temp)}°C</p>
                    <p>${item.wind.speed} km/h</p>
                </div>`;
                    })
                    .join('');
            }
        });
    } else {
        console.error('Weather data is not in the expected format');
    }
};

const updateTime = () => {
    document.querySelector('.time-location h1').textContent = new Date().toLocaleTimeString();
};

setInterval(updateTime, 1000);

document.querySelector('.search-bar input').addEventListener('change', () => {
    const city = document.querySelector('.search-bar input').value;
    if (city) {
        getWeatherData(city).then(updateWeatherUI);
    }
});

getWeatherData("Ballabgarh").then(updateWeatherUI);
