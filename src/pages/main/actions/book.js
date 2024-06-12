import axios from 'misc/requests';
import config from 'config';
import {
  REQUEST_BOOK_LIST,
  RECEIVE_BOOK_LIST,
  ERROR_BOOK_LIST,
  DELETE_BOOK_SUCCESS,
  SHOW_DELETE_MODAL,
  SHOW_NOTIFICATION_POP_UP,
} from 'pages/main/constants/actionTypes';

// requests to the server
const getBooks = (
  page,
  size,
  authorId,
  genreId,
) => {
  const { SERVER_URL } = config;

  return axios.post(SERVER_URL + '/api/books/_list', {
    page,
    size,
    authorId,
    genreId,
  });
};

const removeBook = (id) => {
  const { SERVER_URL } = config;

  return axios.delete(SERVER_URL + `/api/books/${id}`);
};

// fetch book list actions
const requestBooks = () => ({
  type: REQUEST_BOOK_LIST,
});

const receiveBooks = (books) => ({
  type: RECEIVE_BOOK_LIST,
  payload: books,
});

const errorBookList = (error) => ({
  type: ERROR_BOOK_LIST,
  payload: error,
});

// delete book actions
const removeBookActionSuccess = (id) => ({
  type: DELETE_BOOK_SUCCESS,
  payload: { id },
});

const showDeleteModalAction = (show, id) => ({
  type: SHOW_DELETE_MODAL,
  payload: { showDeleteModal: show, bookIdToBeDeleted: id },
});

const showNotificationPopUpAction = (id, show) => ({
  type: SHOW_NOTIFICATION_POP_UP,
  payload: { id, show },
});

export const fetchBooks = (
  dispatch,
  page = 1,
  size = 6,
  authorId,
  genreId,
) => {
  dispatch(requestBooks());

  return getBooks(page, size, authorId, genreId)
    .then(books => dispatch(receiveBooks(books)))
    .catch(error => dispatch(errorBookList(error.response.data.message)));
};

export const deleteBook = (
  dispatch,
  id,
) => {
  return removeBook(id)
    .then(_ => {
      dispatch(removeBookActionSuccess(id));
      return Promise.resolve(id);
    })
    .catch(error =>  Promise.reject(error));
};

export const showDeleteModal = (
  dispatch,
  show,
  id,
) => {
  dispatch(showDeleteModalAction(show, id));
};

export const showDeleteNotificationPopUp = (
  dispatch,
  show,
  id,
) => {
  dispatch(showNotificationPopUpAction(id, show));
};