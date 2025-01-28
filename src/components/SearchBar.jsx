import React, { useState } from 'react';
import { Search } from 'lucide-react';

export const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mb-4">
      <input
        type="text"
        className="form-control"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
      />
      <button type="submit" className="btn btn-dark">
        <Search size={20} />
      </button>
    </form>
  );
};

