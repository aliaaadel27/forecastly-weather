import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { CurrentWeather } from './components/CurrentWeather';
import { Forecast } from './components/Forecast';
import { ErrorMessage } from './components/ErrorMessage';
import { fetchWeather, fetchForecast } from './utils/api';
import { Cloud } from 'lucide-react';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const fetchData = async () => {
      if (city.trim() === '') return;

      try {
        setLoading(true);
        setError('');
        const [weather, forecast] = await Promise.all([
          fetchWeather(city),
          fetchForecast(city),
        ]);
        setWeatherData(weather);
        setForecastData(forecast);
      } catch (err) {
        setError('Failed to fetch weather data. Please check the city name and try again.');
        setWeatherData(null);
        setForecastData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  const handleSearch = (city) => {
    setCity(city);
  };

  return (
    <div className={`container py-4 ${darkMode ? 'dark-mode' : ''}`}>
      <header className="text-center mb-4">
        <div className="d-flex justify-content-center align-items-center gap-2">
          <Cloud size={32} />
          <h1>Weather Forecast</h1>
        </div>
        <SearchBar onSearch={handleSearch} />
        <button className="btn btn-dark-mode mt-3" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
      </header>

      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      )}

      {error && <ErrorMessage message={error} />}

      {weatherData && <CurrentWeather data={weatherData} />}
      {forecastData && <Forecast data={forecastData} isDarkMode={darkMode} />}
    </div>
  );
}

export default App;
