
import React from 'react';


const PerfumeButton = ({ onClick, imageUrl, ingredient}) => {
  return (
    <button className="frontFace" onClick={onClick}>
      <img src={imageUrl} alt="Perfume Button" className="mainImg"/>
      <span className="reveal">{ingredient}</span>
    </button>
  );
};



export default PerfumeButton;