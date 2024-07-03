import axios from 'misc/requests';
import config from 'config';
import storage, { keys } from 'misc/storage';
import {
  ERROR_SIGN_IN,
  ERROR_SIGN_UP,
  RECEIVE_USER,
  REQUEST_SIGN_IN,
  REQUEST_SIGN_OUT,
  REQUEST_SIGN_UP,
  REQUEST_USER,
  SUCCESS_SIGN_IN,
  SUCCESS_SIGN_UP,
  USER_AUTHENTICATION,
  ERROR_RECEIVE_USER,
} from '../constants/actionTypes';

const receiveUser = (user) => ({
  payload: user,
  type: RECEIVE_USER,
});

const errorReceiveUser = () => ({
  type: ERROR_RECEIVE_USER,
});

const requestUser = () => ({
  type: REQUEST_USER,
});

const errorSignIn = (errors) => ({
  payload: errors,
  type: ERROR_SIGN_IN,
});

const requestSignIn = () => ({
  type: REQUEST_SIGN_IN,
});

const successSignIn = (user) => ({
  payload: user,
  type: SUCCESS_SIGN_IN,
});

const errorSignUp = (errors) => ({
  payload: errors,
  type: ERROR_SIGN_UP,
});

const requestSignUp = () => ({
  type: REQUEST_SIGN_UP,
});

const successSignUp = () => ({
  type: SUCCESS_SIGN_UP,
});

const requestSignOut = () => ({
  type: REQUEST_SIGN_OUT,
});

const getUser = () => {
  const {
    SERVER_URL,
  } = config;
  return axios.get(`${SERVER_URL}/api/profile`);
};

const googleSignIn = () => {
  const {
    SERVER_URL,
  } = config;
  return axios.get(`${SERVER_URL}/oauth/google/authenticate`);
};

const signUp = ({
  email,
  firstName,
  lastName,
  login,
  password,
}) => {
  const {
    USERS_SERVICE,
  } = config;
  return axios.post(
    `${USERS_SERVICE}/user/signUp`,
    {
      email,
      firstName,
      lastName,
      login,
      password,
    },
  );
};

const fetchRefreshToken = () => (dispatch) => {

};

export const googleFetchSignIn = (dispatch) => {
  return googleSignIn()
    .catch(error => {
      console.log(error);
    }).then(data => {
      window.location.href = data.address;
    }).catch((errors) => dispatch(errorSignIn(errors)));
};

const fetchSignIn = () => (dispatch) => {
  dispatch(requestSignIn());
  return googleSignIn()
    .catch(error => {
      console.log(error);
    }).then(data => {
      console.log(data)
    }).catch((errors) => dispatch(errorSignIn(errors)));
};

const fetchSignOut = () => (dispatch) => {
  storage.removeItem(keys.TOKEN);
  storage.removeItem(keys.TOKEN_EXPIRATION);
  storage.removeItem('USER'); // TODO: Mocked code
  dispatch(requestSignOut());
};

const fetchSignUp = ({
  email,
  firstName,
  lastName,
  login,
  password,
}) => (dispatch) => {
  dispatch(requestSignUp());
  return signUp({
    email,
    firstName,
    lastName,
    login,
    password,
  }).then(() => dispatch(successSignUp()))
    .catch((errors) => dispatch(errorSignUp(errors)))
};

const fetchUser = (dispatch) => {
  return getUser()
    .then(user => {
      dispatch(receiveUser(user));
    })
    .catch(err => {
      dispatch(errorReceiveUser());
      return Promise.reject();
    });
};

const exportFunctions = {
  fetchRefreshToken,
  fetchSignIn,
  fetchSignOut,
  fetchSignUp,
  fetchUser,
};

export default exportFunctions;
