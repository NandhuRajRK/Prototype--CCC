import React, { useState } from 'react';
import '../App.css'; // Correct path to import App.css from src

const mockDishes = [
  { name: 'Healthy Salad', restaurant: 'Green Eats', healthScore: 90, type: 'vegan' },
  { name: 'Grilled Chicken', restaurant: 'Protein House', healthScore: 85, type: 'keto' },
  { name: 'Avocado Toast', restaurant: 'Fresh Bites', healthScore: 88, type: 'gluten-free' },
  { name: 'Tofu Stir-fry', restaurant: 'Vegan Delights', healthScore: 92, type: 'vegan' }
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(mockDishes);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredDishes = mockDishes.filter(dish =>
      dish.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredDishes);
  };

  const handleFilter = (type) => {
    const filteredDishes = mockDishes.filter(dish => dish.type === type);
    setResults(filteredDishes);
  };

  return (
    <div className="container">
      <h1>Search for Food</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="button" type="submit">Search</button>
      </form>

      <div className="filters">
        <button onClick={() => handleFilter('vegan')}>Vegan</button>
        <button onClick={() => handleFilter('gluten-free')}>Gluten-Free</button>
        <button onClick={() => handleFilter('keto')}>Keto</button>
      </div>

      <div className="results">
        {results.length > 0 ? (
          results.map((dish, index) => (
            <div key={index} className="restaurant-item">
              <h3>{dish.name}</h3>
              <p>{dish.restaurant}</p>
              <p>Health Score: {dish.healthScore}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
