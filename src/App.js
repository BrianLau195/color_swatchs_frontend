import { useState, useEffect } from 'react';
import './App.css';
import { ColorFactory } from './colors';

function App() {
  const [colors, setColors] = useState([]);

  const generateColors = async () => {
    try {
      const response = await fetch('http://localhost:3000/colors');
      const colorData = await response.json();
      const formattedColors = colorData.map(data => 
        ColorFactory.createColor(data).toString()
      );
      setColors(formattedColors);
    } catch (error) {
      console.error('Failed to fetch colors:', error);
      setColors([]);
    }
  };

  useEffect(() => {
    generateColors();
  }, []);

  return (
    <div className="App">
      <div className="color-container">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <button 
        onClick={generateColors}
        className="regenerate-button"
      >
        Regenerate Colors
      </button>
    </div>
  );
}

export default App;
