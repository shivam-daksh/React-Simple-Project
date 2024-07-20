import React, { useState } from 'react';
import './App.css'; 
const App = () => {
  // States to keep track of the colors of the boxes
  const [colors, setColors] = useState(Array(9).fill('white'));
  const [clickOrder, setClickOrder] = useState([]);
  const [currentOrangeIndex, setCurrentOrangeIndex] = useState(0);

 // Function to handle the click event on the boxes
  const handleClick = (index) => {
    if (index === 8) {
      if (currentOrangeIndex < clickOrder.length) { // If the user clicks on the last box before the orange boxes are all clicked
        const newColors = [...colors]; // Copy the colors array
        newColors[clickOrder[currentOrangeIndex]] = 'orange'; // Change the color of the box to orange
        setColors(newColors);
        setCurrentOrangeIndex(currentOrangeIndex + 1);
      }
    } else {
      if (colors[index] !== 'green') { // If the box is not green
        const newColors = [...colors]; // Copy the colors array
        newColors[index] = 'green'; // Change the color of the box to green
        setColors(newColors); // Change the color of the box to green
        setClickOrder([...clickOrder, index]); // Add the index of the box to the clickOrder array
      }
    }
  };
// Function to reset the game
  return (
    <div className="grid">
      {colors.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default App;
