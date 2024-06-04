import React from 'react';
import { createUseStyles } from 'react-jss';
import GenreFilter from './GenreFilter';
import AuthorFilter from './AuthorFilter';

const getClasses = createUseStyles(() => ({
  filterContainer: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: '0.6rem',
    marginBottom: '0.6rem',
  },
}));

const FilterBar = () => {
  const styleClasses = getClasses();

  return (
    <div className={styleClasses.filterContainer}>
      <GenreFilter />
      <AuthorFilter />
    </div>
  );
};

export default FilterBar;