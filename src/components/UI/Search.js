import React from 'react';

import StyledSearch from '../../styles/StyledSearch';


const Search = () => {

  const onSearchInputHandler = () => {

  }

  return (
    <>
      <StyledSearch type="search" name="filter" placeholder="Search contact..." onChange={onSearchInputHandler} />
    </>
  );
}

export default Search;
