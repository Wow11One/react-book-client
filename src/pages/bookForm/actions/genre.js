import axios from 'misc/requests';
import config from 'config';
import {
  RECEIVE_GENRE_LIST,
  ERROR_GENRE_LIST,
} from '../constants/actionTypes';

const receiveGenres = (genres) => ({
  type: RECEIVE_GENRE_LIST,
  payload: genres,
});

const errorGenres = (error) => ({
  type: ERROR_GENRE_LIST,
  payload: error,
});

const getGenres = () => {
  const { SERVER_URL } = config;

  return axios.get(SERVER_URL + '/api/genres');
};

export const fetchGenres = (
  dispatch,
) => {
  return getGenres()
    .then(genres => {
      dispatch(receiveGenres(genres))
    })
    .catch(error => dispatch(errorGenres(error)));
};