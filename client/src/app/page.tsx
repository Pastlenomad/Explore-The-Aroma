'use client'
import React, { useState } from 'react';
import { ingredientList } from '../data';
import './globals.css';
import PerfumeButton from '../components/PerfumeButton';
import PerfumeDetails from '../components/PerfumeDetails';
import SearchBar from '../components/SearchBar';
import { IIngredient } from '../interfaces';
import Image from 'next/image'

const HomePage: React.FC = () => {
  const [perfumeInfo, setPerfumeInfo] = useState<string>('');
  const [perfumeUrl, setPerfumeUrl] = useState<JSX.Element | string>('');
  const [perfumeName, setPerfumeName] = useState<string>('');
  const [noteUrl, setNoteUrl] = useState<JSX.Element | string>('');
  const [heartNoteUrl, setHeartNoteUrl] = useState<JSX.Element | string>('');
  const [baseNoteUrl, setBaseNoteUrl] = useState<JSX.Element | string>('');
  const [isButtonVisible, setButtonVisible] = useState<boolean>(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [isHomeVisible, setIsHomeVisible] = useState<boolean>(false);


  const handleButtonClick = (index: number) => {
    const ingredient: IIngredient = ingredientList[index];

    setPerfumeName(ingredient.perfumeName);
    setPerfumeUrl(
      <Image
        src={ingredient.url}
        style={{ width: '360px', height: 'auto' }}
        alt="Perfume"
      />
    );
    setPerfumeInfo(ingredient.description);
    setNoteUrl(
      <Image
        src={ingredient.noteUrl}
        style={{ width: '150px', height: 'auto' }}
        alt="Note"
      />
    );
    setHeartNoteUrl(
      <Image
        src={ingredient.heartNoteUrl}
        style={{ width: '150px', height: 'auto' }}
        alt="Heart Note"
      />
    );
    setBaseNoteUrl(
      <Image
        src={ingredient.baseNoteUrl}
        style={{ width: '150px', height: 'auto' }}
        alt="Base Note"
      />
    );
    setButtonVisible(false);
    setIsHeaderVisible(false);
    setIsHomeVisible(true);
  };

  const handleSearch = (searchQuery: string) => {
    const searchResult = ingredientList.find((ingredient: IIngredient) =>
      ingredient.perfumeName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchResult) {
      setPerfumeName(searchResult.perfumeName);
      setPerfumeUrl(
        <Image
          src={searchResult.url}
          style={{ width: '360px', height: 'auto' }}
          alt="Perfume"
        />
      );
      setPerfumeInfo(searchResult.description);
      setNoteUrl(
        <Image
          src={searchResult.noteUrl}
          style={{ width: '150px', height: 'auto' }}
          alt="Note"
        />
      );
      setHeartNoteUrl(
        <Image
          src={searchResult.heartNoteUrl}
          style={{ width: '150px', height: 'auto' }}
          alt="Heart Note"
        />
      );
      setBaseNoteUrl(
        <Image
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
      {isHeaderVisible && <h1>Explore the Aroma <br /> <br /> <SearchBar onSearch={handleSearch} /> </h1>}

      <div id="ingredients">

        {isHomeVisible && (
          <button className="home" onClick={handleHomeClick}>Back to home</button>
        )}
        {isButtonVisible && ingredientList.map((ingredient: IIngredient, index: number) => (
          <PerfumeButton
            key={index}
            onClick={() =>
              handleButtonClick(index)}
            imageUrl={ingredient.url}
            ingredient={ingredient.perfumeName}
          />

        ))}


        {!isButtonVisible && (

          <>

            {<PerfumeDetails
              perfumeName={perfumeName}
              perfumeUrl={perfumeUrl}
              perfumeInfo={perfumeInfo}
              noteUrl={noteUrl}
              heartNoteUrl={heartNoteUrl}
              baseNoteUrl={baseNoteUrl}
            />}

          </>
        )}

      </div>
    </>
  );
};

export default HomePage;
