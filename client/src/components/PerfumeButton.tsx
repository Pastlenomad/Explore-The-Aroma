'use client'
import React, { MouseEventHandler } from 'react';
import Image from 'next/image';

interface PerfumeButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  imageUrl: string;
  ingredient: string;
}

const PerfumeButton: React.FC<PerfumeButtonProps> = ({ onClick, imageUrl, ingredient }) => {
  return (
    <button className="frontFace" onClick={onClick}>
      <Image src={imageUrl} alt="Perfume Button" className='mainImg'/>
      <span className="reveal">{ingredient}</span>
    </button>
  );
};

export default PerfumeButton;