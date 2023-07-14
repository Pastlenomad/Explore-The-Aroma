'use client'
import React from 'react';
import Image from 'next/image';
import '../app/globals.css';


interface PerfumeDetailsProps {
  perfumeName: string;
  perfumeUrl: string;
  perfumeInfo: string;
  noteUrl: string;
  heartNoteUrl: string;
  baseNoteUrl: string;
}

const PerfumeDetails: React.FC<PerfumeDetailsProps> = ({
  perfumeName,
  perfumeUrl,
  perfumeInfo,
  noteUrl,
  heartNoteUrl,
  baseNoteUrl,
}) => {

  return perfumeUrl !== '' ? (
    <div className="container all">
      <h2>{perfumeName}</h2>
      <div className="main">
        <Image src={perfumeUrl} width={360} height={360} alt="Perfume" /></div>
      <div className="picture">
        <Image src={noteUrl} width={150} height={150} alt="Perfume" />
        <Image src={heartNoteUrl} width={150} height={150} alt="Perfume" />
        <Image src={baseNoteUrl} width={150} height={150} alt="Perfume" />

      </div>
      <div className="description">{perfumeInfo}</div>
    </div>
  ) : (
    <h2>No results found</h2>
  )
}

export default PerfumeDetails;

