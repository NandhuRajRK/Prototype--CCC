import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Update the path to import App.css

const Home = () => {
  return (
    <div className="container">
      <h1>Good Morning, Nandhu!</h1>
      <div className="health-score">
        <div className="health-score-circle">85</div>
        <p>Daily Health Score</p> {/* This text will now be centered */}
      </div>

      <div className="nutrition-summary">
        <div>
          <h3>Calories</h3>
          <p>1500</p>
        </div>
        <div>
          <h3>Protein</h3>
          <p>65g</p>
        </div>
        <div>
          <h3>Carbs</h3>
          <p>180g</p>
        </div>
        <div>
          <h3>Fats</h3>
          <p>45g</p>
        </div>
      </div>

      <div className="buttons">
        <Link to="/search" className="button">Order Now</Link>
        <Link to="/meal-analysis" className="button">Analyze Meal</Link>
        <Link to="/nutritional-breakdown" className="button">View Recommendations</Link>
        {/* New Link to Profile Settings */}
        <Link to="/profile-settings" className="button">Profile Settings</Link>
      </div>
    </div>
  );
};

export default Home;
