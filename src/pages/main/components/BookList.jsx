import React from 'react';
import Box from 'components/Box';
import Typography from 'components/Typography';
import { useSelector } from 'react-redux';
import BookListItem from './BookListItem';
import { createUseStyles } from 'react-jss';

const getStyles = createUseStyles({
  bookContainer: {
    marginBottom: 30,
  },
});

const BookList = () => {
  const bookStore = useSelector(({ book }) => book);
  const styleClasses = getStyles();

  return (
    <div className={styleClasses.bookContainer}>
      {!!bookStore.books.length
        ?
        <Box
          display='grid'
        >
          <Box gridColumn='span 3'>
            {bookStore.books.map(book =>
              (
                <BookListItem
                  book={book}
                />
              ),
            )}
          </Box>
        </Box>
        :
        <Box
          display='flex'
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography
            capitalize={true}
            variant={'title'}
          >
            There is no book with such params.
          </Typography>
        </Box>
      }
    </div>
  );
};

export default BookList;