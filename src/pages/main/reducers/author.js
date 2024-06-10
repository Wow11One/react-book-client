import {
  RECEIVE_AUTHOR_LIST,
  REQUEST_AUTHOR_LIST,
  ERROR_AUTHOR_LIST,
} from '../constants/actionTypes';

const initialState = {
  authors: [],
  error: null,
  isLoading: false,
};

const mapToAuthors = (author) => ({
  id: author.id,
  name: author.name,
});

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_AUTHOR_LIST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case RECEIVE_AUTHOR_LIST: {
      return {
        ...state,
        authors: action.payload.map(mapToAuthors),
      };
    }

    case ERROR_AUTHOR_LIST: {
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

