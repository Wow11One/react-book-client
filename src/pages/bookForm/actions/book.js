import {
  RECEIVE_BOOK,
  ERROR_BOOK,
} from '../constants/actionTypes';
import config from 'config';
import axios from 'misc/requests';

const receiveBook = book => ({
  type: RECEIVE_BOOK,
  payload: book,
});

const errorBook = error => ({
  type: ERROR_BOOK,
  payload: error.message,
});

const getBook = id => {
  const { SERVER_URL } = config;

  return axios.get(`${SERVER_URL}/api/books/${id}`);
};

const createBook = book => {
  const { SERVER_URL } = config;

  return axios.post(`${SERVER_URL}/api/books`, book);
};

const updateBook = (book, id) => {
  const { SERVER_URL } = config;

  return axios.put(`${SERVER_URL}/api/books/${id}`, book);
};

const mapToBook = book => ({
  id: book.id,
  title: book.title,
  yearPublished: book.yearPublished,
  publicationHouse: book.publicationHouse,
  circulation: book.circulation,
  pageAmount: book.pageAmount,
  genreId: book.genre.id,
  authorId: book.author.id,
});

export const saveBook = (
  book,
) => {
  return createBook(book)
    .then(book => Promise.resolve(book.id))
    .catch(error => Promise.reject(error.message));
};

export const changeBook = (
  book,
  id,
) => {
  return updateBook(book, id);
};

export const fetchBook = (
  dispatch,
  id,
) => {
  return getBook(id)
    .then(book => {
      const mappedBook = mapToBook(book);
      dispatch(receiveBook(mappedBook));
      return Promise.resolve(mappedBook);
    })
    .catch(error => dispatch(errorBook(error)));
};