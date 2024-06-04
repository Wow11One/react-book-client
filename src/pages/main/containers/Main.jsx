import React, { useEffect } from 'react';
import FilterBar from 'pages/main/components/filters/FilterBar';
import BookList from 'pages/main/components/BookList';
import { fetchBooks } from '../actions/book';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const bookStore = useSelector(({ book }) => book);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBooks(dispatch);
  }, []);

    return (
        <>
            <FilterBar/>
            <BookList/>
        </>
    );
};

export default Main;