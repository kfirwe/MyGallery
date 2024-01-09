import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Gallery.css';

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const renderImages = () => {
    return images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Image ${index + 1}`}
        className={`gallery-image ${index === currentImageIndex ? 'active' : ''}`}
        onClick={() => toast(`Hi ${`Image ${currentImageIndex + 1}`}`)}
      />
    ));
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">My React Gallery</h1>
      <div className="image-wrapper">{renderImages()}</div>
      <div className="button-container">
        <button onClick={showPrevImage}>Previous</button>
        <button onClick={showNextImage}>Next</button>
        <ToastContainer position="top-center" autoClose={5000} />
      </div>
    </div>
  );
};

export default Gallery;
