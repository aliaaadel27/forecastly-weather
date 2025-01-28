import React from 'react';

export const Forecast = ({ data, isDarkMode }) => {
  const dailyForecast = data.list.filter((item, index) => index % 8 === 0).slice(0, 5);

  return (
    <div className="container">
      <h3 className={`text-center mb-5 ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        5-Day Forecast
      </h3>
      <div className="row justify-content-center">
        {dailyForecast.map((day) => (
          <div key={day.dt_txt} className="col-md-2 col-6 mb-4">
            <div
              className="card text-center rounded-3 border-0 text-light"
            >
              <div className="card-body">
                <p className="fw-bold mb-2">
                  {new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}
                </p>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt={day.weather[0].description}
                  className="mx-auto mb-3"
                  style={{  width: '70px', height: '70px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)' }}
                />
                <p className="lead mb-1">{Math.round(day.main.temp)}°C</p>
                <p 
                >{day.weather[0].description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
