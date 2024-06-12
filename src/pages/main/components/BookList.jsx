import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import Box from 'components/Box';
import Typography from 'components/Typography';
import DeleteModal from './DeleteModal';
import BookListItem from './BookListItem';
import Snackbar from 'components/Snackbar';
import { showDeleteModal, showDeleteNotificationPopUp } from '../actions/book';

const getStyles = createUseStyles({
  bookContainer: {
    marginBottom: 30,
  },
});

const BookList = () => {
  const bookStore = useSelector(({ book }) => book);
  const dispatch = useDispatch();
  const styleClasses = getStyles();

  return (
    <div className={styleClasses.bookContainer}>
      {!!bookStore.books.length
        ?
        <Box
          display="grid"
        >
          <Box gridColumn="span 3">
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
          display="flex"
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
      <DeleteModal
        open={bookStore.showDeleteModal}
        bookId={bookStore.bookIdToBeDeleted}
        onClose={() => {
          showDeleteModal(
            dispatch,
            false,
            null,
          );
        }}
      />
      <Snackbar
        open={bookStore.showDeleteNotificationPopUp}
        message={`The #${bookStore.notificationPopUpBookId} book was successfully deleted.`}
        onClose={() => {
          showDeleteNotificationPopUp(
            dispatch,
            false,
            NaN,
          );
        }}
      >
      </Snackbar>
    </div>
  );
};

export default BookList;