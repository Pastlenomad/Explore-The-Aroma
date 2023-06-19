'use client'
import React, { useState } from 'react';
import { ingredientList } from './data';
import './globals.css';
import PerfumeButton from './components/PerfumeButton';
import PerfumeDetails from './components/PerfumeDetails';
import SearchBar from './components/SearchBar';

interface Ingredient {
  name:string,
  perfumeName: string;
  url: string;
  description: string;
  noteUrl: string;
  heartNoteUrl: string;
  baseNoteUrl: string;
}

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
    const ingredient: Ingredient = ingredientList[index];

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

  const handleSearch = (searchQuery: string) => {
    const searchResult = ingredientList.find((ingredient: Ingredient) =>
      ingredient.perfumeName.toLowerCase().includes(searchQuery.toLowerCase())
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

export default HomePage;



/*
 JWT app front end sample - exercise auth-it-master

 import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import auth from './utils/auth';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  return (
    <main className="App">
      <Router>
        <Navbar isAuthenticated={isAuthenticated} />
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      </Router>
    </main>
  );
}

export default App;

*/