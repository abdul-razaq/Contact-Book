/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import StyledSearch from '../../styles/StyledSearch';

const Search = ({ onSearchInputHandler, searchValue }) => {
  return (
    <>
      <StyledSearch
        type="search"
        name="filter"
        placeholder="Search contact..."
        value={searchValue}
        onChange={event => onSearchInputHandler(event.target.value)}
      />
    </>
  );
};

Search.propTypes = {
  onSearchInputHandler: PropTypes.func,
  searchValue: PropTypes.string,
};

export default React.memo(Search);
