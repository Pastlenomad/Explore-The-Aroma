'use client'
import React from 'react';
import Image from 'next/image';
import '../app/globals.css';


interface PerfumeDetailsProps {
  perfumeName: string;
  perfumeUrl: JSX.Element | string;
  perfumeInfo: string;
  noteUrl: string | JSX.Element;
  heartNoteUrl: string | JSX.Element;
  baseNoteUrl: string | JSX.Element;
}

const PerfumeDetails: React.FC<PerfumeDetailsProps> = ({
  perfumeName,
  perfumeUrl,
  perfumeInfo,
  noteUrl,
  heartNoteUrl,
  baseNoteUrl,
}) => {
  console.log(perfumeUrl)
  console.log(perfumeInfo)
  return (
    <div className="container">
      <h2>{perfumeName}</h2>
      <div className="main">{perfumeUrl}</div>
      <div className="picture">
        <Image src={noteUrl} width="100"/> 
        <Image src={heartNoteUrl} width="100"/> 
        <Image src={baseNoteUrl} width="100"/> 
      </div>
      <div className="description">{perfumeInfo}</div>
    </div>
  );
};

export default PerfumeDetails;

