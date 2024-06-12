import {
  RECEIVE_AUTHOR_LIST,
  REQUEST_AUTHOR_LIST,
  ERROR_AUTHOR_LIST,
} from '../constants/actionTypes';
import config from 'config';
import axios from 'misc/requests';

const receiveAuthors = (authors) => ({
  type: RECEIVE_AUTHOR_LIST,
  payload: authors,
});

const requestAuthors = () => ({
  type: REQUEST_AUTHOR_LIST,
});

const errorAuthors = (error) => ({
  type: ERROR_AUTHOR_LIST,
  payload: error,
});

const getAuthors = () => {
  const { SERVER_URL } = config;

  return axios.get(SERVER_URL + '/api/authors');
};

export const fetchAuthors = (
  dispatch,
) => {
  dispatch(requestAuthors());

  return getAuthors()
    .then(authors => dispatch(receiveAuthors(authors)))
    .catch(error => dispatch(errorAuthors(error)));
};