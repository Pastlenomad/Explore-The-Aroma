import React from 'react';

const PerfumeDetails = ({
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
