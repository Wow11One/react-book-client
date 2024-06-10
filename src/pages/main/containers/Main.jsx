import React, { useEffect } from 'react';
import Pagination from 'components/Pagination';
import FilterBar from 'pages/main/components/filters/FilterBar';
import BookList from 'pages/main/components/BookList';
import { deleteBook, fetchBooks } from '../actions/book';
import { fetchAuthors } from '../actions/author';
import { fetchGenres } from '../actions/genre';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { useSearchParams } from 'react-router-dom';

const getStyles = createUseStyles({
  bookContainer: {
    marginBottom: 30,
  },
});

const Main = () => {
  const styleClasses = getStyles();
  const dispatch = useDispatch();
  const bookStore = useSelector(({ book }) => book);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get('page')) || 1;
  const authorId = parseInt(searchParams.get('authorId')) || null;
  const genreId = parseInt(searchParams.get('genreId')) || null;

  const fetchBookList = () => {
    fetchBooks(
      dispatch,
      page,
      bookStore.listLimitSize,
      authorId,
      genreId,
    );
  };
  const removeBook = (dispatch, bookId) => {
    fetchBooks(
      dispatch,
      page,
      bookStore.listLimitSize,
      authorId,
      genreId,
    );
    deleteBook(
      dispatch,
      bookId,
    );
  };

  const changePage = (event, page) => {
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
      <FilterBar authorId={1} genreId={1} />
      <BookList />
      <Pagination
        count={bookStore.totalPages}
        page={page}
        onChange={changePage}
        color={'primary'}
      />
    </div>
  );
};

export default Main;