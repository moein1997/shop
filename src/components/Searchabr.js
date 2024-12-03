import React, { useState } from 'react';
import "./searchbar.css"

const SearchBar =  ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        if (onSearch) {
          onSearch(e.target.value); // Pass the value to the parent for filtering
        }
      };
    
    const handleClear = () => {
    setSearchTerm('');
    if (onSearch) {
      onSearch(''); // Reset search in the parent component
    }
  };

  return (
    <div className='searchbar'>
      <input className='searchbarinput'
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {searchTerm && (
        <button className='handleClearbutton'
          onClick={handleClear}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchBar;