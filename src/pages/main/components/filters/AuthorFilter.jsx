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
    paddingBottom: '0.6rem',
    paddingTop: '0.6rem',
    width: '20%',
  },
  inputLabel: {
    textAlign: 'center',
  },
}));

const AuthorFilter = () => {
  const styleClasses = getClasses();

  return (
    <div className={styleClasses.filterContainer}>
      <Typography>
        Author
      </Typography>
      <div>
        <Select
          displayEmpty={true}
        >
          <InputLabel>
            any author
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

export default AuthorFilter;