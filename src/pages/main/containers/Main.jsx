import React, { useEffect } from 'react';
import Pagination from 'components/Pagination';
import Button from 'components/Button';
import FilterBar from 'pages/main/components/filters/FilterBar';
import BookList from 'pages/main/components/BookList';
import { fetchBooks } from '../actions/book';
import { fetchAuthors } from '../actions/author';
import { fetchGenres } from '../actions/genre';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { useSearchParams } from 'react-router-dom';
import useChangePage from 'misc/hooks/useChangePage';
import pagesURLs from 'constants/pagesURLs';
import * as pages from 'constants/pages';
import formType from '../../bookForm/constants/formType';

const getStyles = createUseStyles({
  bookContainer: {
    marginBottom: 30,
  },

  filterContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '50px',
  },

  filterButtonsContainer: {
    margin: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const Main = () => {
  const styleClasses = getStyles();
  const dispatch = useDispatch();
  const bookStore = useSelector(({ book }) => book);
  const changePage = useChangePage();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get('page')) || 1;
  const authorId = parseInt(searchParams.get('authorId')) || null;
  const genreId = parseInt(searchParams.get('genreId')) || null;

  const setNewPage = (event, page) => {
    searchParams.set('page', page);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    fetchBooks(
      dispatch,
      page,
      bookStore.listLimitSize,
      authorId,
      genreId,
    );
    fetchAuthors(
      dispatch,
    );
    fetchGenres(
      dispatch,
    );
  }, []);

  useEffect(() => {
    fetchBooks(
      dispatch,
      page,
      bookStore.listLimitSize,
      authorId,
      genreId,
    );
  }, [page, authorId, genreId, bookStore.books.length]);

  return (
    <div className={styleClasses.bookContainer}>
      <div
        className={styleClasses.filterButtonsContainer}
      >
        <div
          className={styleClasses.filterContainer}
        >
          <FilterBar />
        </div>
        <div>
          <Button
            onClick={() => changePage({
              pathname: `${pagesURLs[pages.bookPage]}/form`,
              locationSearch: {
                ...(page && { page }),
                ...(authorId && { authorId }),
                ...(genreId && { genreId }),
                type: formType.CREATE,
              },
            })}
          >
            Create a book
          </Button>
        </div>
      </div>
      <BookList />
      <Pagination
        count={bookStore.totalPages}
        page={page}
        onChange={setNewPage}
        color={'primary'}
      />
    </div>
  );
};

export default Main;