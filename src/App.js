import './App.css';
import React from 'react';
import Gallery from './Gallery';
import img1 from './images/007.png';
import img2 from './images/italy.jpg';
import img3 from './images/lambo.jpg';

const App = () => {
  const images = [
    img1,
    img2,
    img3,
    // Add more image URLs as needed
  ];

  return (
    <div>
      <Gallery images={images} />
    </div>
  );
};

export default App;