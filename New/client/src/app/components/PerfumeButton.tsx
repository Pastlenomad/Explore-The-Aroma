'use client'
import React, { MouseEventHandler } from 'react';

interface PerfumeButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  imageUrl: string;
  ingredient: string;
}

const PerfumeButton: React.FC<PerfumeButtonProps> = ({ onClick, imageUrl, ingredient }) => {
  return (
    <button className="frontFace" onClick={onClick}>
      <img src={imageUrl} alt="Perfume Button" className='mainImg'/>
      <span className="reveal">{ingredient}</span>
    </button>
  );
};

export default PerfumeButton;