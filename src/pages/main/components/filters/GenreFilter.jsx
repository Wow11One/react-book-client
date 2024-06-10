import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Typography from 'components/Typography';
import Select from 'components/Select';
import MenuItem from 'components/MenuItem';
import { createUseStyles } from 'react-jss';

const getClasses = createUseStyles(() => ({
  filterContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputLabel: {
    textAlign: 'center',
  },
}));

const GenreFilter = () => {
  const styleClasses = getClasses();
  const genreStore = useSelector(({ genre }) => genre);
  const [searchParams, setSearchParams] = useSearchParams();
  const GENRE_ID_PARAMETER = 'genreId';
  const genreId = searchParams.get(GENRE_ID_PARAMETER);

  const addGenreIdParam = (e) => {
    if (e.target.value) {
      searchParams.set(GENRE_ID_PARAMETER, e.target.value);
      searchParams.delete('page');
    } else {
      searchParams.delete(GENRE_ID_PARAMETER);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className={styleClasses.filterContainer}>
      <Typography>
        Genre
      </Typography>
      <div>
        <Select
          displayEmpty={true}
          value={genreId}
          onChange={addGenreIdParam}
        >
          <MenuItem
            value={null}
            selected={true}
          >
            any genre
          </MenuItem>
          {genreStore.genres.map(genre => (
            <MenuItem
              value={genre.id}
            >
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default GenreFilter;