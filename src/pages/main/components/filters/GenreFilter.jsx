import React from 'react';
import Typography from '../../../../components/Typography';
import Select from '../../../../components/Select';
import MenuItem from '../../../../components/MenuItem';
import { createUseStyles } from 'react-jss';
import InputLabel from '../../../../components/InputLabel';

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

  return (
    <div className={styleClasses.filterContainer}>
      <Typography>
        Genre
      </Typography>
      <div>
        <Select
          displayEmpty={true}
        >
          <InputLabel>
            any genre
          </InputLabel>
          <MenuItem
            value={10}
          >
            Hello)
          </MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default GenreFilter;