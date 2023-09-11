import React, { useState, useEffect } from 'react';
import './App.css';
import PerfumeButton from './Components/PerfumeButton.js';
import PerfumeDetails from './Components/PerfumeDetails.js';
import SearchBar from './Components/SearchBar.js';
// import { ClerkProvider } from "@clerk/clerk-react";

// if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }
// const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

export default function PerfumeResult() {
  const [perfumeList, setPerfumeList] = useState([]);
  const [perfumeInfo, setPerfumeInfo] = useState('');
  const [perfumeUrl, setPerfumeUrl] = useState('');
  const [perfumeName, setPerfumeName] = useState('');
  const [noteUrl, setNoteUrl] = useState('');
  const [heartNoteUrl, setHeartNoteUrl] = useState('');
  const [baseNoteUrl, setBaseNoteUrl] = useState('');
  const [isButtonVisible, setButtonVisible] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHomeVisible, setIsHomeVisible] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/perfumes')
      .then((response) => response.json())
      .then((data) => setPerfumeList(data))
      .catch((error) => console.error('error'));
  }, []);

  const handleButtonClick = (index) => {
    const ingredient = perfumeList[index];

    setPerfumeName(ingredient.perfumeName);
    setPerfumeUrl(
      <img
        src={ingredient.url}
        style={{ width: '360px', height: 'auto' }}
        alt="Perfume"
      />
    );
    setPerfumeInfo(ingredient.description);
    setNoteUrl(
      <img
        src={ingredient.noteUrl}
        style={{ width: '150px', height: 'auto' }}
        alt="Note"
      />
    );
    setHeartNoteUrl(
      <img
        src={ingredient.heartNoteUrl}
        style={{ width: '150px', height: 'auto' }}
        alt="Heart Note"
      />
    );
    setBaseNoteUrl(
      <img
        src={ingredient.baseNoteUrl}
        style={{ width: '150px', height: 'auto' }}
        alt="Base Note"
      />
    );

    setButtonVisible(false);
    setIsHeaderVisible(false);
    setIsHomeVisible(true);
  };

  const handleSearch = (searchQuery) => {
    const searchResult = perfumeList.find((ingredient) =>
      ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchResult) {
      setPerfumeName(searchResult.perfumeName);
      setPerfumeUrl(
        <img
          src={searchResult.url}
          style={{ width: '360px', height: 'auto' }}
          alt="Perfume"
        />
      );
      setPerfumeInfo(searchResult.description);
      setNoteUrl(
        <img
          src={searchResult.noteUrl}
          style={{ width: '150px', height: 'auto' }}
          alt="Note"
        />
      );
      setHeartNoteUrl(
        <img
          src={searchResult.heartNoteUrl}
          style={{ width: '150px', height: 'auto' }}
          alt="Heart Note"
        />
      );
      setBaseNoteUrl(
        <img
          src={searchResult.baseNoteUrl}
          style={{ width: '150px', height: 'auto' }}
          alt="Base Note"
        />
      );

      setButtonVisible(false);
      setIsHeaderVisible(false);
      setIsHomeVisible(true);
    } else {
      setPerfumeName('No results found');
      setPerfumeUrl('');
      setPerfumeInfo('');
      setNoteUrl('');
      setHeartNoteUrl('');
      setBaseNoteUrl('');

      setButtonVisible(false);
      setIsHeaderVisible(false);
      setIsHomeVisible(true);
    }
  };

  const handleHomeClick = () => {
    setButtonVisible(true);
    setIsHeaderVisible(true);
    setIsHomeVisible(false);
  };

  return (
    <>
    {/* <ClerkProvider publishableKey={clerkPubKey}>
      <div>Hello from clerk</div>
    </ClerkProvider> */}
      {isHeaderVisible && (
        <h1>
          Explore the Aroma <br /> <br />{' '}
          <SearchBar onSearch={handleSearch} />{' '}
        </h1>
      )}

      <div id="ingredients">
        {isHomeVisible && (
          <button className="home" onClick={handleHomeClick}>
            Back to home
          </button>
        )}

        {isButtonVisible &&
          perfumeList.map((perfume, index) => (
            <PerfumeButton
              key={index}
              onClick={() => handleButtonClick(index)}
              imageUrl={perfume.noteUrl}
              ingredient={perfume.name}
            />
          ))}

        {!isButtonVisible && (
          <PerfumeDetails
            perfumeName={perfumeName}
            perfumeUrl={perfumeUrl}
            perfumeInfo={perfumeInfo}
            noteUrl={noteUrl}
            heartNoteUrl={heartNoteUrl}
            baseNoteUrl={baseNoteUrl}
          />
        )}
      </div>
    </>
  );
}
