import React from 'react';
import '../App.css'; // Correct path to import App.css from src

const NutritionalBreakdown = () => {
  const mockNutritionalData = {
    calories: 500,
    protein: '35g',
    carbs: '60g',
    fats: '15g',
  };

  const healthierAlternatives = [
    { name: 'Grilled Salmon', score: 95 },
    { name: 'Quinoa Salad', score: 92 },
    { name: 'Cauliflower Rice', score: 90 },
    { name: 'Baked Sweet Potatoes', score: 88 }
  ];

  return (
    <div className="container">
      <h1>Nutritional Breakdown for Today</h1>
      <div className="nutrition-summary">
        <div>
          <h3>Calories</h3>
          <p>{mockNutritionalData.calories} kcal</p>
        </div>
        <div>
          <h3>Protein</h3>
          <p>{mockNutritionalData.protein}</p>
        </div>
        <div>
          <h3>Carbs</h3>
          <p>{mockNutritionalData.carbs}</p>
        </div>
        <div>
          <h3>Fats</h3>
          <p>{mockNutritionalData.fats}</p>
        </div>
      </div>

      <div className="alternatives">
        <h2>Healthy Meals for Today!</h2>
        {healthierAlternatives.map((alternative, index) => (
          <div key={index} className="alternative-item">
            <h3>{alternative.name}</h3>
            <p>Health Score: {alternative.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionalBreakdown;
