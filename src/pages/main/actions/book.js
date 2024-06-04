import axios from 'misc/requests';
import config from 'config';
import {
  REQUEST_BOOK_LIST,
  RECEIVE_BOOK_LIST,
  ERROR_BOOK_LIST,
} from 'pages/main/constants/actionTypes';

const getBooks = (
  page,
  size,
  authorId,
  publicationHouse,
  genre,
) => {
  const { SERVER_URL } = config;

  return axios.post(SERVER_URL + '/api/books/_list', {
    page,
    size,
    authorId,
    publicationHouse,
    genre,
  });
};

const requestBooks = () => ({
  type: REQUEST_BOOK_LIST,
});

const receiveBooks = (books) => ({
  type: RECEIVE_BOOK_LIST,
  payload: books,
});

const errorBooks = (error) => ({
  type: ERROR_BOOK_LIST,
  payload: error,
});

export const fetchBooks = (
  dispatch,
  page = 1,
  size = 6,
  authorId,
  publicationHouse,
  genre,
) => {
  dispatch(requestBooks());

  return getBooks(page, size, authorId, publicationHouse, genre)
    .then(books => dispatch(receiveBooks(books)))
    .catch(err => dispatch(errorBooks(err)));
};