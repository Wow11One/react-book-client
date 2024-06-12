import {
  RECEIVE_GENRE_LIST,
  ERROR_GENRE_LIST,
} from '../constants/actionTypes';

const initialState = {
  genres: [],
  error: null,
};

const mapToGenre = (genre) => ({
  id: genre.id,
  name: genre.name,
});

export default function Reducer(state = initialState, action) {
  switch (action.type) {

    case RECEIVE_GENRE_LIST: {
      return {
        ...state,
        genres: action.payload.map(mapToGenre),
      };
    }

    case ERROR_GENRE_LIST: {
      return {
        ...state,
        error: action.payload.message,
      };
    }

    default: {
      return state;
    }
  }
}