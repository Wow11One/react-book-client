import React from 'react';
import GenreFilter from './GenreFilter';
import AuthorFilter from './AuthorFilter';

const FilterBar = () => {
  return (
    <>
      <GenreFilter />
      <AuthorFilter />
    </>
  );
};

export default FilterBar;