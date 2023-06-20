'use client'
import React, { useState, useEffect } from 'react';
import { fetchParfume } from '../../api/fetch';
import {ingredientData} from '../data';
import './globals.css';
import PerfumeButton from '../components/PerfumeButton';
import PerfumeDetails from '../components/PerfumeDetails';
import SearchBar from '../components/SearchBar';
import { IIngredient, IEachIngredient } from '../interfaces';

const HomePage: React.FC = () => {
  const [ingredientList, setIngredientList] = useState<IIngredient[]>([]);

  const [perfumeInfo, setPerfumeInfo] = useState<string>('');
  const [perfumeUrl, setPerfumeUrl] = useState<string>('');
  const [perfumeName, setPerfumeName] = useState<string>('');
  const [noteUrl, setNoteUrl] = useState<string>('');
  const [heartNoteUrl, setHeartNoteUrl] = useState<string>('');
  const [baseNoteUrl, setBaseNoteUrl] = useState<string>('');
  const [isButtonVisible, setButtonVisible] = useState<boolean>(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [isHomeVisible, setIsHomeVisible] = useState<boolean>(false);

  useEffect(() => {
    fetchParfume()
    .then((dataParfume) => {
      setIngredientList(dataParfume);
    }) 
  },[]);

  const handleButtonClick = (index: number) => {
    const ingredient: IIngredient = ingredientList[index];

    setPerfumeName(ingredient.perfumeName);
    setPerfumeUrl(
      ingredient.url
    );
    setPerfumeInfo(ingredient.description);
    setNoteUrl(
      ingredient.noteUrl
    );
    setHeartNoteUrl(
      ingredient.heartNoteUrl
    );
    setBaseNoteUrl(
      ingredient.baseNoteUrl
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
        searchResult.url
      );
      setPerfumeInfo(searchResult.description);
      setNoteUrl(
       searchResult.noteUrl
      );
      setHeartNoteUrl(
        searchResult.heartNoteUrl
      );
      setBaseNoteUrl(
       searchResult.baseNoteUrl
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
        {isButtonVisible && ingredientData.map((ingredient: IEachIngredient, index: number) => (
          <PerfumeButton
            key={index}
            onClick={() =>
              handleButtonClick(index)}
            imageUrl={ingredient.url}
            ingredient={ingredient.ingredientName}
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
