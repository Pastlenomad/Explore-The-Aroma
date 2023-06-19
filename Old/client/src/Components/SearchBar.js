import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="search">
    <form onSubmit={handleSubmit}>
        
      <input
       
        type="text"
        placeholder="&#128269;"
        value={searchQuery}
        onChange={handleInputChange}
        
      />
      
    </form>
    </div>
  );
};

export default SearchBar;
