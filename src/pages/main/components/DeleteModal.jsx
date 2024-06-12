import React, { useState } from 'react';
import Dialog from 'components/Dialog';
import DialogContent from 'components/DialogContent';
import DialogActions from 'components/DialogActions';
import Typography from 'components/Typography';
import Button from 'components/Button';
import { deleteBook, showDeleteNotificationPopUp } from '../actions/book';
import { useDispatch } from 'react-redux';


const DeleteModal = ({
  open,
  onClose,
  bookId,
}) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ error: null });

  const setError = (error) => {
    setState({
      ...state,
      error,
    });
  };

  const removeBook = () => {
    deleteBook(
      dispatch,
      bookId,
    )
    .then(id => {
      onClose();
      setError(null);
      console.log(id)
      showDeleteNotificationPopUp(
        dispatch,
        true,
        id,
      );
    })
    .catch(error => {
      setError(error.message);
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogContent>
        <Typography>
          Do you really want to delete the book with id {bookId} ?
        </Typography>
        {!!state.error &&
          <Typography
            color={'error'}
          >
            Error occurred while removing the book.
            {state.error}
          </Typography>
        }
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onClose();
            setError(null);
          }}
          colorVariant={'header'}
        >
          Cancel
        </Button>
        <Button
          colorVariant={'primary'}
          onClick={removeBook}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;