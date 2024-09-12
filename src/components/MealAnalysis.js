import React from 'react';
import '../App.css'; // Correct path to import App.css from src

const MealAnalysis = () => {
  const detectedIngredients = [
    { name: 'Chicken Breast', quantity: '200g' },
    { name: 'Broccoli', quantity: '100g' },
    { name: 'Brown Rice', quantity: '150g' },
    { name: 'Olive Oil', quantity: '1 tbsp' }
  ];

  const suggestedModifications = [
    'Replace butter with olive oil',
    'Use brown rice instead of white rice',
    'Add more greens (spinach, kale)',
    'Grill instead of fry'
  ];

  return (
    <div className="container">
      <h1>Meal Analysis</h1>
      <div className="upload-section">
        <label htmlFor="file-upload">Upload a Meal Photo</label>
        <input type="file" id="file-upload" />
      </div>

      <div className="ingredients">
        <h2>Detected Ingredients</h2>
        {detectedIngredients.map((ingredient, index) => (
          <div key={index} className="ingredient-item">
            <h3>{ingredient.name}</h3>
            <p>{ingredient.quantity}</p>
          </div>
        ))}
      </div>

      <div className="modifications">
        <h2>Healthier Modifications</h2>
        {suggestedModifications.map((modification, index) => (
          <div key={index} className="modification-item">
            <h3>{modification}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealAnalysis;
