'use client'
import React, { MouseEventHandler } from 'react';
import Image from 'next/image';
import '../app/globals.css';


interface PerfumeButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  imageUrl: string;
  ingredient: string;
}

const PerfumeButton: React.FC<PerfumeButtonProps> = ({ onClick, imageUrl, ingredient }) => {
  return (
    <button className="frontFace all" onClick={onClick}>
      <Image src={imageUrl} alt="Perfume Button" width={200} height={200}  className='mainImg'/>
      <span className="reveal">{ingredient}</span>
    </button>
  );
};

export default PerfumeButton;