import React, { useEffect } from 'react';
import Pagination from 'components/Pagination';
import FilterBar from 'pages/main/components/filters/FilterBar';
import BookList from 'pages/main/components/BookList';
import { fetchBooks } from '../actions/book';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { useSearchParams } from 'react-router-dom';

const getStyles = createUseStyles({
  bookContainer: {
    marginBottom: 30,
  },
});

const Main = () => {
  const dispatch = useDispatch();
  const bookStore = useSelector(({ book }) => book);
  const styleClasses = getStyles();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get('page')) || 1;


  useEffect(() => {
    fetchBooks(
      dispatch,
      page,
    );

    if (page > bookStore.totalPages || page < 1 || !Number.isInteger(page)) {

    }
  }, []);
  console.log(page);
  console.log(bookStore.totalPages);
  console.log(bookStore.books);

  useEffect(() => {
    fetchBooks(
      dispatch,
      page,
    );

    if (page > bookStore.totalPages || page < 1 || !Number.isInteger(page)) {

    }
  }, [page]);

  return (
    <div className={styleClasses.bookContainer}>
      <FilterBar />
      <BookList />
      <Pagination
        count={bookStore.totalPages}
        page={page}
        onChange={(event, page) => setSearchParams({ ...searchParams, page: page })}
        color={'primary'}
      />
    </div>
  );
};

export default Main;