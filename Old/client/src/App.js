import React, { useState } from 'react';
import { ingredientList } from './data.js';
import './App.css';

import PerfumeButton from './Components/PerfumeButton.js';
import PerfumeDetails from './Components/PerfumeDetails.js';
import SearchBar from './Components/SearchBar.js';

export default function PerfumeResult() {

  
  const [perfumeInfo, setPerfumeInfo] = useState('');
  const [perfumeUrl, setPerfumeUrl] = useState('');
  const [perfumeName, setPerfumeName] = useState('');
  const [noteUrl, setNoteUrl] = useState('');
  const [heartNoteUrl, setHeartNoteUrl] = useState('');
  const [baseNoteUrl, setBaseNoteUrl] = useState('');
  const [isButtonVisible, setButtonVisible] = useState(true); //button will be visible on the main page by setting it true
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); //header will be visible on the main page by setting it true
  const [isHomeVisible, setIsHomeVisible] = useState(false); //I want home button on result page so that user can go back to main page it will be hidden in the beginning by setting it false

  const handleButtonClick = (index) => {
    const ingredient = ingredientList[index];
    
    

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
    setIsHomeVisible(true); // Show the home button
  };

  const handleSearch = (searchQuery) => {
    
    const searchResult = ingredientList.find((ingredient) =>
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
      setIsHomeVisible(true); // Show the home button
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
        {isButtonVisible && (
          <PerfumeButton
            onClick={() => handleButtonClick(0)}
            imageUrl="https://www.jomalone.co.uk/media/export/cms/spp/tasing_notes/desktop/Star_Anise_Desktop.png"
            ingredient="Star Anise"
          />
        )}
        {isButtonVisible && (
          <PerfumeButton
            onClick={() => handleButtonClick(1)}
            imageUrl="https://www.jomalone.co.uk/media/export/cms/spp/tasing_notes/desktop/Red_Roses_Accord_Desktop.png"
            ingredient="Rose"
          />
        )}
        {isButtonVisible && (
          <PerfumeButton
            onClick={() => handleButtonClick(2)}
            imageUrl="https://www.jomalone.co.uk/media/export/cms/spp/tasing_notes/desktop/Marigold_Desktop.png"
            ingredient="Marigold"
          />
        )}
        {isButtonVisible && (
          <PerfumeButton
            onClick={() => handleButtonClick(3)}
            imageUrl="https://pastlenomad.github.io/Pictures/Bergamot_Desktop.avif"
            ingredient="Bergamot"
          />
        )}
        {isButtonVisible && (
          <PerfumeButton
            onClick={() => handleButtonClick(4)}
            imageUrl="https://pastlenomad.github.io/Pictures/Wild_Achillea_Mobile.avif"
            ingredient="Wild Achillea"
          />
        )}

        {isButtonVisible && (
          <PerfumeButton
            onClick={() => handleButtonClick(5)}
            imageUrl="https://pastlenomad.github.io/Pictures/Cypress_Desktop.avif"
            ingredient="Cypress"
          />
        )}

       {isButtonVisible && (
          <PerfumeButton
            onClick={() => handleButtonClick(6)}
            imageUrl="https://pastlenomad.github.io/Pictures/English_Lavender_Desktop.png"
            ingredient="Lavender"
          />
        )}  

       {isButtonVisible && (
          <PerfumeButton
            onClick={() => handleButtonClick(7)}
            imageUrl="https://pastlenomad.github.io/Pictures/Tuberose_Desktop.avif"
            ingredient="Tuberose"
          />
        )}  
        {isButtonVisible && (
          <PerfumeButton
            onClick={() => handleButtonClick(8)}
            imageUrl="https://pastlenomad.github.io/Pictures/Patchouli.avif"
            ingredient="Patchouli"
          />
        )} 
        {isButtonVisible && (
          <PerfumeButton
            onClick={() => handleButtonClick(9)}
            imageUrl="https://pastlenomad.github.io/Pictures/Tonka_Bean_Desktop.avif"
            ingredient="Tonka"
          />
        )} 
        
        
        {!isButtonVisible &&  (
          
          <>
          
            <PerfumeDetails
              perfumeName={perfumeName}
              perfumeUrl={perfumeUrl}
              perfumeInfo={perfumeInfo}
              noteUrl={noteUrl}
              heartNoteUrl={heartNoteUrl}
              baseNoteUrl={baseNoteUrl}
            />
          
          </>
        )}
        
      </div>
    </>
  );
}


