import React, { useState } from 'react';
import '../App.css'; // Import global styles

const ProfileSettings = () => {
  const [preferences, setPreferences] = useState({
    vegan: false,
    glutenFree: false,
    keto: false
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="container">
      <h1>Profile & Settings</h1>

      <div className="preferences">
        <h3>Dietary Preferences</h3>
        <label>
          Vegan
          <input
            type="checkbox"
            name="vegan"
            checked={preferences.vegan}
            onChange={handleChange}
          />
        </label>
        <label>
          Gluten-Free
          <input
            type="checkbox"
            name="glutenFree"
            checked={preferences.glutenFree}
            onChange={handleChange}
          />
        </label>
        <label>
          Keto
          <input
            type="checkbox"
            name="keto"
            checked={preferences.keto}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default ProfileSettings;
