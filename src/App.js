import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import NutritionalBreakdown from './components/NutritionalBreakdown';
import MealAnalysis from './components/MealAnalysis';
import ProfileSettings from './components/ProfileSettings'; // Import ProfileSettings

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/nutritional-breakdown" element={<NutritionalBreakdown />} />
        <Route path="/meal-analysis" element={<MealAnalysis />} />
        <Route path="/profile-settings" element={<ProfileSettings />} /> {/* Add ProfileSettings route */}
      </Routes>
    </Router>
  );
};

export default App;
