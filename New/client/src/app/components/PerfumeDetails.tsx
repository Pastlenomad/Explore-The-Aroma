'use client'
import React from 'react';

interface PerfumeDetailsProps {
  perfumeName: string;
  perfumeUrl: JSX.Element | string;
  perfumeInfo: string;
  noteUrl: JSX.Element | string;
  heartNoteUrl: JSX.Element | string;
  baseNoteUrl: JSX.Element | string;
}

const PerfumeDetails: React.FC<PerfumeDetailsProps> = ({
  perfumeName,
  perfumeUrl,
  perfumeInfo,
  noteUrl,
  heartNoteUrl,
  baseNoteUrl,
}) => {
  return (
    <div className="container">
      <h2>{perfumeName}</h2>
      <div className="main">{perfumeUrl}</div>
      <div className="picture">
        {noteUrl} {heartNoteUrl} {baseNoteUrl}
      </div>
      <div className="description">{perfumeInfo}</div>
    </div>
  );
};

export default PerfumeDetails;

