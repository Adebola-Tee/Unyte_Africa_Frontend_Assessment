import React from "react";
import { CgSearch } from 'react-icons/cg';
import { MdCancel } from "react-icons/md";

const SearchBar = ({ searchItem, setSearchItem, SearchedItem, ResetItem }) => {
  const RemoveKeyWord = () => {
    setSearchItem('');
    ResetItem();
  };

  // Dynamically adjusting input width based on length of keyword
  const inputStyle = {
    height: '40px',
    width: searchItem && searchItem.length > 8 ?  `${searchItem.length * 20}px` : '100%', 
  };

  return (
    <div className="">
      <div className='flex justify-center relative'>
        <div className="relative">
          <CgSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
            style={{ color: 'green', fontSize: '20px' }}
          />
          <input
            className="text-black pl-10 pr-3 rounded-l-lg rounded-r-lg mx-auto"
            type="text"
            value={searchItem}
            onChange={SearchedItem}
            style={inputStyle}
            data-testid="search-input" // Add data-testid attribute to input
          />
          {searchItem && (
            <MdCancel
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              style={{ color: 'green', fontSize: '20px' }}
              onClick={RemoveKeyWord}
              data-testid="cancel-icon" // Add data-testid attribute to cancel icon
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;