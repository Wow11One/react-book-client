import React from 'react';
import Typography from 'components/Typography';
import Select from 'components/Select';
import MenuItem from 'components/MenuItem';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

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
  const authorStore = useSelector(({ author }) => author);
  const [searchParams, setSearchParams] = useSearchParams();
  const AUTHOR_ID_PARAMETER = 'authorId';
  const authorId = searchParams.get(AUTHOR_ID_PARAMETER);

  const addAuthorIdParam = (e) => {
    if (e.target.value) {
      searchParams.set(AUTHOR_ID_PARAMETER, e.target.value);
      searchParams.delete('page');
    } else {
      searchParams.delete(AUTHOR_ID_PARAMETER);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className={styleClasses.filterContainer}>
      <Typography>
        Author
      </Typography>
      <div>
        <Select
          displayEmpty={true}
          value={authorId}
          onChange={addAuthorIdParam}
          label={'author'}
        >
          <MenuItem
            value={null}
            selected={true}
          >
            any author
          </MenuItem>
          {authorStore.authors.map(author => (
            <MenuItem
              value={author.id}
            >
              {author.name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default AuthorFilter;