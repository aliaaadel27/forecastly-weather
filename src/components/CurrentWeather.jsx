import React from 'react';
import { Cloud, Droplets } from 'lucide-react';

export const CurrentWeather = ({ data }) => {
  return (
    <div className="card mb-4 text-light">
      <div className="card-body text-center">
        <h2 className="card-title mb-3">{data.name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          className="mx-auto mb-3"
          style={{ width: '100px', height: '100px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)' }}
        />
        <p className="lead mb-1">{Math.round(data.main.temp)}°C</p>
        <p className="mb-3">Feels like {Math.round(data.main.feels_like)}°C</p>
        <p className="mb-3">{data.weather[0].description}</p>
        
        <div className="d-flex justify-content-around">
          <span>
            <Cloud size={40} /> {data.weather[0].main}
          </span>
          <span>
            <Droplets size={40} /> Humidity: {data.main.humidity}%
          </span>
        </div>
      </div>
    </div>
  );
};
