// SearchBar.js
import React from "react";
import { CgSearch } from 'react-icons/cg';
import { MdCancel } from "react-icons/md";

const SearchBar = ({ searchItem, setSearchItem, SearchedItem, ResetItem }) => {
  const RemoveKeyWord = () => {
    setSearchItem('');
    ResetItem();
  };

  return (
    <div className="">
      <div className='flex justify-center relative'>
        <CgSearch
          className="absolute"
          style={{ color: 'blue' }}
        />
        <input
          className="text-black"
          type="text"
          value={searchItem}
          onChange={SearchedItem}
        />
        {searchItem && (
          <MdCancel
            onClick={RemoveKeyWord}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
