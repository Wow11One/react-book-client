import React, { useEffect, useState } from 'react';
import Box from 'components/Box';
import { useSelector } from 'react-redux';
import BookListItem from './BookListItem';

const BookList = () => {
  const bookStore = useSelector(({ book }) => book);
  console.log(bookStore.books);
  return (
    <Box
      display='grid'
      gridTemplateColumns='repeat(12, 1fr)'
      gap={3}
    >
      {bookStore.books.map(book =>
        (<Box gridColumn='span 3'>
          <BookListItem
            book={book}
          />
        </Box>
        ))}
    </Box>
  );
};

export default BookList;